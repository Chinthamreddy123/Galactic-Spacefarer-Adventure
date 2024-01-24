# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
Created required Fiori app with Listreport page & Object page.
List Report Page:

The List Report page is designed to display a list of Spacefarer entities.
Users can view and interact with a summary of Spacefarers in this page.
Object Page:

The Object Page is used to display detailed information about a specific Spacefarer when selected from the List Report.
CRUD Operations:

CRUD options (Create, Edit, Delete) have been activated, allowing users to perform these actions on Spacefarer entities.
This implies that users can create new Spacefarers, edit existing ones, and delete Spacefarers as needed.
Sorting and Filtering:

The Fiori app supports sorting, allowing users to organize the list of Spacefarers based on specified criteria.
Filtering is also supported, enabling users to narrow down the displayed Spacefarers based on certain conditions or criteria.

`db/` | your domain models and data go here
Created a .cds file schema under the DB folder, defining the following entities as part of the requirement:

Spacefarers
Departments
Positions
Additionally, Created relationships for Spacefarers with Departments and Positions


`srv/` | your service models and code go here
Created service.cds and service.js files
service.cds file, Defined a service to Expose an entity Spacefarers as a Odata service and added required authencation checks by using mock users in Package.json. In real time we will handle Authentication by creating Scopes and Role templetes in xs-security.json.

service.js, implemented a service to handle @before and @After event handlers

@Before, Implemented a Validation to check stardustCollection and Navskill are not a special characters
@after, Implemented a Email notification using nodemailer to the Sapacefarer to welcome them to the space club. In real time we can use "SENDGRID" method wic required SENDGRID_API_KEY and Destination service.

`package.json` | project metadata and configuration
Maintained the sql database as a test db, in real time we will use Hana DB/Postgrey
added the Mockusers
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
