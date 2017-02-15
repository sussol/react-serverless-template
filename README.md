# sussol-serverless-template
Template app for deploying a serverless API
For more thorough reading, see our docs [here](http://wiki.sussol.net/doku.php/msupply:development:serverless).

To develop:
  * Copy repo into new project (don't take the .git folder)
  * npm install --global serverless
  * Search Lastpass for Serverless Framework AWS IAM Role, and run the command in the comments. Or
    make a new config, also saved in Lastpass
  * Search Lastpass for Sussol Subscriptions MySQL Config. Make a config for your new project
    similar to this in Lastpass
  * Edit functions in handler.js
  * To add an endpoint, add a function in handler.js and serverless.yml
  * Test locally using, for example:
    serverless invoke --function myFunction
  * Test online by deploying to a dev stage, and then hitting the endpoints shown in terminal:
    serverless deploy --stage dev

To [deploy](https://serverless.com/framework/docs/providers/aws/cli-reference/deploy/):
  * Run ```serverless deploy``` from terminal, within the repository root directory

To [view logs](https://serverless.com/framework/docs/providers/aws/cli-reference/logs/#logs):
  * Run ```serverless logs -f login``` from terminal, within the repository root directory ('login' can be replaced with other endpoints like 'crypto' and 'health'

To debug:
  * Write ```console.log();``` statements into the handler.js functions
  * Deploy the update
  * Make a request to the endpoint you are working on
  * Output the logs for that endpoint (see above)
