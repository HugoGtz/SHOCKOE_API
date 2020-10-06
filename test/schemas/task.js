let taskSchema = {
    type: "object",
    properties: {
        id: {
            type: "integer"
        },
        name: {
            type: "string"
        },
        description: {
            type: "string"
        },
        due_date: {
            type: "string",
            format: "date-time"
        },
        completed:{
            type:  "boolean"
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
        "description",
        "due_date",
        "createdAt",
        "updatedAt"
    ]
}

let tasksSchema = {
    type: "array",
    items: taskSchema
}

export { taskSchema, tasksSchema}
