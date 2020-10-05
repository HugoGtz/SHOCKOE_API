let userSchema = {
    type: "object",
    properties: {
        id: {
            type: "integer"
        },
        name: {
            type: "string"
        },
        username: {
            type: "string"
        },
        createdAt: {
            type: "string",
            format: "date-time"
        },
        updatedAt: {
            type: "string",
            format: "date-time"
        }
    },
    required: [
        "id",
        "name",
        "username",
        "createdAt",
        "updatedAt"
    ]
}

let usersSchema = {
    type: "array",
    items: usersSchema
}

export { userSchema, usersSchema}
