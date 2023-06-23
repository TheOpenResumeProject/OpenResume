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
| meta       | object    | Yes      | [See](#meta)| summary for easier searching |
| data       | object    | Yes      | [See](#data)| the content of the resume    |

### Meta
`meta` contains a bird's eye view of the resume so that it's faster to
search/crawl/categorize.

| Field Name | Data Type | Required | Default | Values       | Remarks                      |
| ---------- | --------- | -------- | ------- | -----------  | ---------------------------- |
| name       | string    | Yes      | None    | your name    | Whose resume is this?        |
| sort       | string    | No       | chrono  | chrono, alpha| sort criteria                |
| sort_order | string    | No       | asc     | asc, desc    | which direction to sort      |
| tags       | array     | No       | None    | tags         | comma separted tags          |

### Data
The `data` is the meat of the resume. `data` has a number of objects, which are different
sections of the resume, such as *Education*, *Work History*, *Projects* etc that you may
have listed in your resume. We will describe them in further details here.

#### `personal`
| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ----------    | --------- | -------- | ------- | -------------- | ---------------------------- |
| name          | string    | Yes      | None    | Your name      | This is displayed as title   |
| phone_number  | string    | Yes      | None    | Contact number | Include area code as well    |
| email         | string    | Yes      | None    | Email address  | Where should the contact you |
| country_code  | string    | No       | None    | Country Code   | "+1" for the US              |
| address_line_1| string    | No       | None    | First line addr| Street address if you include|
| address_line_2| string    | No       | None    | Second line addr| Apt/Suit etc.               |
| city          | string    | No       | None    | City           | Name of your city            |
| state         | string    | No       | None    | state, province| For US, two letter state abbr|
| country       | string    | No       | None    | 2-digit country| For US, "us" (need citation) |
| url_linkedin  | string    | No       | None    | LinkedIn profile| Actual URL of your profile  |
| url_website   | string    | No       | None    | URL for website | Actual URL of your website  |
| url_portfolio | string    | No       | None    | URL for portfolio | URL to your portfolio     |
| url_other     | array     | No       | None    | List of URL objects | [more](#url-object)     |

#### `summary`
| Field Name | Data Type | Required | Default | Values       | Remarks                      |
| ---------- | --------- | -------- | ------- | -----------  | ---------------------------- |
| summary    | string    | No       | None    |              | summary/objective text       |

## How to Use
Coming!

## License
MIT
