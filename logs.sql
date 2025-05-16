SELECT * 
            FROM (
                SELECT  user_email,
                        job_type, 
                        last_run_date,
                        project_id,
                        dataset_id,
                        table_id,
                        query,
                        row_number() OVER (PARTITION BY project_id,dataset_id,table_id order by last_run_date desc) as last_call
                FROM  (
                    SELECT  user_email,
                            job_type, 
                            date(start_time) as last_run_date,
                            referenced_tables,
                            query,
                    FROM `{}.`.`region-us`.INFORMATION_SCHEMA.JOBS
                    WHERE query IS NOT NULL
                        ),unnest(referenced_tables)
                    )
          where last_call = 1
