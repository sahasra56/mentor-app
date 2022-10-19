import { Injectable } from '@angular/core';

enum Role {
    ADMIN = 1,
    NON_ADMIN = 2
}

@Injectable({
    providedIn: 'root'
})
export class AccessControlService {

    getAccessControls(role: number = 2) {
        return [
            {
                "module_name": "users",
                "create_action": false,
                "read_action": true,
                "update_action": true,
                "delete_action": false
            },
            {
                "module_name": "articles",
                "create_action": (Role.ADMIN == role) ? true : false,
                "read_action": true,
                "update_action": (Role.ADMIN == role) ? true : false,
                "delete_action": (Role.ADMIN == role) ? true : false
            },
            {
                "module_name": "events",
                "create_action": (Role.ADMIN == role) ? true : false,
                "read_action": true,
                "update_action": (Role.ADMIN == role) ? true : false,
                "delete_action": (Role.ADMIN == role) ? true : false
            },
            {
                "module_name": "tasks",
                "create_action": true,
                "read_action": true,
                "update_action": true,
                "delete_action": true
            },
            {
                "module_name": "podcasts",
                "create_action": (Role.ADMIN == role) ? true : false,
                "read_action": true,
                "update_action": (Role.ADMIN == role) ? true : false,
                "delete_action": (Role.ADMIN == role) ? true : false
            },
            {
                "module_name": "question-and-answers",
                "create_action": true,
                "read_action": true,
                "update_action": true,
                "delete_action": false
            }
        ]
    }
}