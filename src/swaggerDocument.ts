const swaggerDocument: object= 
{
  "swagger": "2.0",
  "basePath": "/basepath",
  "info": {
    "title": "TypeScript Express API Yeah",
    "version": "1.0.0"
  },
  "paths": {
    "/example": {
      "get": {
        "summary": "Example route",
        "responses": {
          "200": {
            "description": "Success Yeah"
          }
        },
        "security": [
          {
            "ApiKeyAuth": []
          }
        ]
      }
    },
    "/other/{param1}": {
      "get": {
        "summary": "Another Example route without security",
        "parameters": [
          {
            "name": "param1",
            "in": "path",
            "description": "Parameter param1 in path",
            "required": true,
            "type": "string"
          },
          {
            "name": "param2",
            "in": "query",
            "description": "Query parameter 2",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Success Yeah"
          }
        }
      }
    },
    "/another": {
      "post": {
        "summary": "Another Example route with POST request and body",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "description": "Request body",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "param1": {
                  "type": "string"
                },
                "param2": {
                  "type": "string"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success Yeah"
          }
        }
      }
    }
  },
  "securityDefinitions": {
    "ApiKeyAuth": {
      "type": "apiKey",
      "in": "header",
      "name": "x-api-key"
    }
  }
}

export default swaggerDocument;