# OpenResume
An attempt to standardize resume so that data and formatting are kept and
treated separately. Hopefully the days of re-typing your whole resume into
the ATS system is over.

## Vision
Resumes contains _more or less_ the same thing, yet it is one of the most
frustrating portion between the jobseekers and employers. We want to bring
this to chatGPT era by setting a standard that's machine readable so the
ATS systems can expect and parse resumes without going through development
hell to extract data _correctly_ from the candidates.

We would formalize a standard in the coming days using JSON as this ubiquitious
and portable. We will also implement libraries in different languages so
you can easily parse a resume sent using the OpenResume format.


## Specification
A resume formatted with OpenResume is a JSON object. This only contains
the data part of the resume - formatting is separate concern. We envision
a template marketplace that can take the OpenResume specification and get
creative with the presentation. We plan on developing a similar specification
for styling/formatting/presentation in the upcoming days.

The parent object is called an OpenResume object. It contains several fields
that expands into more details. The following table describes the top-level
fields as well as the nested fields.

| Field Name | Data Type | Required | Values      | Remarks                      |
| ---------- | --------- | -------- | ----------- | ---------------------------- |
| version    | string    | Yes      | "0.0.1"     | OpenResume version           |
| format     | string    | Yes      | "orf"       | OpenResume format            |
| meta       | object    | Yes      | See Section | summary for easier searching |
| data       | object    | Yes      | See Section | the content of the resume    |

## How to Use
Coming!

## License
MIT
