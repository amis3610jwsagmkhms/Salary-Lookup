# Salary-Lookup
The Ohio State University - Foundations of Business Informations Systems (AMIS 3610)

# How to update branch with master code: 
    git fetch
    git rebase origin/master
    
# Purpose
    Organizations have adapted a public portal or application for outside users, as well as for members of their community, in hopes to create transparency. 
    After several requests The Ohio State University has also joined this initiative. 
    With the support of the university and the public, this application could now bring about any potential discrepancies lingering in faculty diversity and equality.
    
# Architecture
    The application utilizes ASP.NET core to run in the background. ASP.NET handles both the controllers and models, all while connecting       to the database. This base is what Angular works off of to bring about the website functionalities. It creates separate models and HTML     in order for the response to sent from the server to the client.
