#use gpt-3 api to generate an itinerary of the three places and send it to localhost:5000/schedule 

import os
import openai

openai.api_key = ("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")
response = openai.Completion.create(
    model="text-davinci-003",
    prompt="give me a daily schedule for a trip to New York City",
    max_tokens=100,
    temperature=0,
)

print(response)