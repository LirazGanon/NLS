export const cmpService = {
    query,
    getDemoSite
}

function query() {
    return {
        type: [{
            "id": "item-1",
            "data": "HEADER"
        },
        {
            "id": "item-2",
            "data": "HERO"
        },
        {
            "id": "item-3",
            "data": "FORUM"
        },
        {
            "id": "item-4",
            "data": "TEXT"
        },
        {
            "id": "item-5",
            "data": "FOOTER"
        }],
        options: {
            "drop": false,
            "animate": true
        }
    }

}

function getDemoSite() {
    return {
        layout: [
            {
                "id": "item-6",
                "data": "Draggable 2 - 1"
            },
            {
                "id": "item-7",
                "data": "Draggable 2 - 2"
            },
            {
                "id": "item-8",
                "data": "Draggable 2 - 3"
            },
            {
                "id": "item-9",
                "data": "Draggable 2 - 4"
            },
            {
                "id": "item-10",
                "data": "Draggable 2 - 5"
            }
        ],
        options: {
            "drop": true,
            "animate": true
        }
    }
}