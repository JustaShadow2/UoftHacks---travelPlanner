#use gpt-3 api to generate an itinerary of the three places and send it to localhost:5000/schedule 

import os
import openai

openai.api_key = ("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")
response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Give me a 3 day schedule for a trip to New York including Empire state building, movies and a museum",
    max_tokens=100,
    temperature=0,
)

print(str(response['choices'][0]['text']))