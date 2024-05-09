## Updating angular globally
`npm uninstall -g @angular/cli`
`npm i -g @angular/cli`

## Upgrading Angular to a new version
eg. upgrading to angular 17
`ng update`  -- get a list of packages/library to update
`ng update @angular/core@17 @nagular/cli@17`

-- most of the time runing ng update @angular/cdk --force will update most dependency in package.json then you can follow with ng update @angular/cli@17. Feel free to check the angular upgrade guid for your version.