# Hello World

Hello World apps.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/katsuhiko/sls-hello` to install the service in your current working directory
2. Next up cd into the service with `cd sls-hello`
3. Run `npm install`
4. Deploy with `serverless deploy`

## How to use

Simply perform requests against the exposed endpoints:

### Hello World

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/hello
```

### Hello Hoge

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/hello/<name>
```
