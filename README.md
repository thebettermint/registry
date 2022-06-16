# bettermint registry

Organizations looking to be apart of thebettermint ecosystem will need to register prior to being listed on the platform.

- Licensed 501(c)(3) designation
- Demonstrate a target audience for the donations
- Contact information for donors looking for more information
- Website with goals and mission statement
- Plan for donations dispersement, time and to which wallets

If you are an organization looking to list, please fork this repo and follow the instructions below.

### Instructions

Begin by forking this package.
Once forked, add your organization to the registry.json saved in the /src directory.
Inlude all of the following parameters for your organization:

| Field          | Type   | Description                                       |
| -------------- | ------ | ------------------------------------------------- |
| name           | string | Name of your organization                         |
| description    | string | Description including mission statement and goals |
| address        | string | XRPL Address                                      |
| image          | string | URL to organization/initiative logo               |
| phone          | string | Phone number                                      |
| mailingAddress | string | Eligible address                                  |
| country        | string | Country of origin                                 |
| EIN            | number | Employer Identification Number                    |

Save changes and create a pull request.

### Example

```JSON
        {
            "name":"Save the Whales",
            "description":"Our mission is to provide a more sustainable future for the whales",
            "address":"rpfBYsmNBB7Y6z7qHS8g26KE3y3hHaTxkq",
            "image":"https://github.com/thebettermint/registry/blob/a3fc4bad1c3eee86f52ed4eb2a873e54fbd8855a/src/assets/sample_logo.png",
            "phone":"555-555-5555",
            "mailingAddress":"4 Privet Drive, Little Whinging, Surrey",
            "country": "EN",
            "EIN":"12-3456789"
        }
```
