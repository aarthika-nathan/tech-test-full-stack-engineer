Your Solution Documentation
===========================

## Backend

Requires to expose three APIs to access the data and for the operations accepting a job and declining a job. The API spec is as follows:

Retrieving Jobs:
    GET /jobs                       : Retrieves all the jobs
    GET /jobs?status=new            : Retrieves all the jobs where the status is new
    GET /jobs?status=accepted       : Retrieves all the jobs where the status is accepted

    POST /jobs/:id/accept           : Update the status of the job as accepted
    POST /jobs/:id/decline          : Update the status of the job as declined

Mysql Db connection is required to query the data. Used the library 'mysql'.

Querying the list of jobs requires a complex query with joins to fetch the the data in all three tables jobs, categories and suburbs.

Updated the versioning of the library used to add Jest dependency, since the Typescript related versions are outdated. Resulting in adding few libraries to make the code base to run without any errors.

Remove the hard coded configurations and updated them as environment variables.

## Frontend

Used the React Bootstrap components and the React Bootstrap Icons for the implementation.

There are multiple components created to reuse them in creating the card views for the accepted jobs and pending jobs. Both card views have a different struture but similar components. This provides a clear picture of the struture with the stylings.

Telephone and email text is implemented as links to initiate the call or to send an email when clicking the text.

Remove the hard coded configurations. The configurations could be made as environment variables or to be fetched from secure portal like AWS Secrets Manager.



## Clarifications Required

In the accepted tabs, the circle components are in different colors, was this to show the accepted and declined jobs in the view. I have only added a single color circle assuming we should list down the accepted jobs.

## Things Which Can be Done

* Add a message (banner or a toast to indicate the failure or success of the calls made to the backend when updating the job status)

* Show an error page when there is a failure in fetching the data 

* Improve the test cases for the backend and the frontend

* Proper a constant naming style for folders and files

* Add validations to check the props are not null or undefined.

* Instead of using console log to print the error, show the error page or error banner for any failures

