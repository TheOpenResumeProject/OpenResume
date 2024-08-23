import json
from jsonschema import validate, ValidationError

def validate_resume(resume):
    with open("../schema.json", "r") as schema_file:
        schema = json.load(schema_file)
        
    try:
        validate(resume, schema)
        print("Resume is valid.")
    except ValidationError as e:
        print("Validation error:", e)

with open("example.json", "r") as f:
	resume_data = json.load(f)

validate_resume(resume_data)

