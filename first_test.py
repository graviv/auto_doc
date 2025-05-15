import pandas as pd
import re

# Example DataFrame
data = {
    'call_id': [1, 2, 3],
    'conversation_text': [
        "Hello there! How can I help you today?",
        "No greetings were exchanged.",
        "Hi, hello, HELLO, how are you?"
    ]
}
df = pd.DataFrame(data)

# Function to count 'hello' occurrences
def count_hello(text):
    return len(re.findall(r'\bhello\b', text, flags=re.IGNORECASE))

# Apply the function
df['hello_count'] = df['conversation_text'].apply(count_hello)

# Result
print(df[['call_id', 'hello_count']])
