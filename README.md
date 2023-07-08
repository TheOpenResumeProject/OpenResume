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

| Object/Field Name | Data Type | Required | Spefication            |
| ----------------- | --------- | -------- | ---------------------- |
| personal          | object    | Yes      | [Personal](#personal)  |
| education         | array     | Yes      | [Education](#education)|
| experience        | array     | Yes      | [Experience](#experience)|
| summary           | string    | No       | [Summary](#summary)    |
| projects          | array     | No       | [Projects](#projects)  |
| publication       | array     | No       | [Publication](#publication)|

#### Personal
The personal object contains the following fields:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
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
| url_other     | array     | No       | None    | List of URLs   | [More on URL Object](#url)   |

##### URL
A URL object consists of the following fields:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| link          | string    | Yes      | None    | URL            | The actual URL               |
| text          | string    | No       | None    | Text to display| Show some text instead of URL|

#### Education
`education` is an array and it contains one or more degree objects. Each `degree` contains the following
fields:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| degree_level  | string    | Yes      | None    | bachelors, masters, k12 | level of education  |
| degree_title  | string    | Yes      | None    | B.A., M.A, B.S.| Specific title of the degree |
| completed     | bool      | Yes      | true    | true, false    | Is degree finished or not    |
| institution   | string    | Yes      | None    | Name of institution | Full name of the school |
| institution_city | string | No       | None    | Chicago, Denver etc.| City wehre the school is|
| institution_state| string | No       | None    | "AL", "NY", etc. | 2-letter state abbreviation|
| institution_zip  | string | No       | None    | ZIP/Postal code| School's ZIP code            |
| institution_country | string | No    | None    | "us", "uk", etc| 2-letter country code        |
| major         | string    | No       | None    | Name of major  | (double/triple) major(s)     |
| concentration | string    | No       | None    | focus/track    | Specfic focus within major   |
| minor         | string    | No       | None    | Name of minor  | (double/triple) minor(s)     |
| gpa           | string    | No       | None    | Cumulative GPA | Overall GPA (number/letter)  |
| gpa_scale     | string    | No       | None    | Maximum GPA    | The GPA scale, like 4.0      |
| start_day     | number    | No       | 1       | {0...31}       | Day you started school       |
| start_month   | number    | No       | 1       | {1...12}       | Month you started school     |
| start_year    | number    | Yes      | None    | >= 1900        | Year you started school      |
| end_day       | number    | No       | 1       | {0...31}       | Day you ended school         |
| end_month     | number    | No       | 1       | {1...12}       | Month you ended school       |
| end_year      | number    | Yes      | None    | >= start_year  | Year you ended school        |


#### Experience 
`experience` is also an array containing one or more `position` objects. Each `position` contains the following
fields:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| title         | string    | Yes      | None    | Official title | Example: Tech Lead, Manager  |
| employer      | string    | Yes      | None    | Employer name  | Specific title of the degree |
| employer_city | string    | No       | None    | Employer city  | "Remote" for remote jobs     |
| employer_state| string    | No       | None    | "NC", "NY",... | 2-letter state abbreviation  |
| employer_country | string | No       | None    | "US", "UK",... | 2-letter country code        |
| description   | array     | No       | None    | array of objects | [Description](#description)|

#### Publication
Similar to `experience` and `education`, the `publication` object is also an array of `reference`
objects. A `reference` object contains the following fields:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| title         | string    | Yes      | None    | Title of paper | Example: "A study on..."     |
| url           | string    | No       | None    | Link to paper  | The actual URL, if any       |
| year          | number    | No       | None    | >= 1800        | Year it was published        |
| month         | number    | No       | None    | {1...12}       | Month of publication         |
| doi           | string    | No       | None    | The DOI URL    | [More](https://www.doi.org/) |
| citation_style| string    | No       | apa     | apa,chicago,mla,iee | citation format to use  | 
| authors       | array     | No       | None    | Array of authors | [Author object](#author)   |

##### Author
An `author` object contains the following fields:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| first         | string    | Yes      | None    | First name     | Example: "Albert"            |
| last          | string    | Yes      | None    | Last name      | Example: "Einstein"          |

#### Projects
`projects` is an array containing one or more `project` object(s), which has following fields.

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| title         | string    | Yes      | None    | Project title  | "Linux: an Operating System" |
| sub_title     | string    | No       | None    | Project subtitle | A more detailed title      |
| url           | string    | No       | None    | URL            | Link to demo/code/slide deck |
| description   | array     | No       | None    | Array of points| [See more](#point)           |

##### Description
A `description` contains one or more bullet points and is used in `projects` and `experience` sections

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| text          | string    | Yes      | None    | details text   | "built an OS called Linux"   |
| tools         | array     | No       | None    | List of Skills | [See skill](#skills)         |

#### Skills
The `skills` array contain one or more skill(s). Following are the fields
for a `skill`:

| Field Name    | Data Type | Required | Default | Values         | Remarks                      |
| ------------- | --------- | -------- | ------- | -------------- | ---------------------------- |
| name          | string    | Yes      | None    | Name of the skill | Example: "C", "Python" etc|
| proficiency   | string    | No       | None    | beginner, advanced| level of proficiency      |
| category      | string    | No       | None    | broader category| Usefull for categorizing skills |


#### Summary
WIP

## How to Use
Coming soon!

## License MIT
