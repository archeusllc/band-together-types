import { Elysia } from 'elysia';
declare const app: Elysia<"", {
    decorator: {};
    store: {};
    derive: Partial<{
        readonly firebase: {
            readonly uid: string;
            readonly email: string | undefined;
        };
    }>;
    resolve: {};
}, {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: import("@sinclair/typebox").TModule<{}>;
    error: {};
} & {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly firebase: {
            readonly uid: string;
            readonly email: string | undefined;
        };
    } | undefined>;
} & {
    schema: {};
    macro: {};
    macroFn: {};
    parser: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    get: {
        body: unknown;
        params: {};
        query: unknown;
        headers: unknown;
        response: {
            200: {
                message: string;
                status: string;
            };
        };
    };
} & {
    health: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    status: string;
                    timestamp: string;
                    checks: {
                        database: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        register: {
            post: {
                body: {
                    displayName?: string | undefined;
                    email: string;
                    firebaseUid: string;
                    idToken: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        error: string;
                        message: string;
                        documentation: string;
                        user?: undefined;
                    } | {
                        user: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                        error?: undefined;
                        message?: undefined;
                        documentation?: undefined;
                    } | {
                        error: string;
                        message?: undefined;
                        documentation?: undefined;
                        user?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        login: {
            post: {
                body: {
                    firebaseUid: string;
                    idToken: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        error: string;
                        message: string;
                        documentation: string;
                        user?: undefined;
                    } | {
                        user: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                        error?: undefined;
                        message?: undefined;
                        documentation?: undefined;
                    } | {
                        error: string;
                        message?: undefined;
                        documentation?: undefined;
                        user?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        logout: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        reset: {
            post: {
                body: {
                    email: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {};
} & {
    auth: {
        me: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        email: string;
                        displayName: string | null;
                        firebaseUid: string | null;
                        userId: string;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    feed: {};
} & {
    feed: {
        get: {
            body: unknown;
            params: {};
            query: {
                page?: number | undefined;
                limit?: number | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    events: ({
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        acts: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        guildId: string | null;
                        venueId: string | null;
                    })[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            events: {};
        };
    };
} & {
    guilds: {
        ":guildId": {
            events: {
                post: {
                    body: {
                        description?: string | undefined;
                        poster?: string | undefined;
                        visibility?: "PUBLIC" | "PRIVATE" | undefined;
                        venueId?: string | undefined;
                        title: string;
                        startTime: string;
                        duration: number;
                        eventType: "GIG" | "REHEARSAL" | "SHOW_OFFER";
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            guild: {
                                createdAt: Date;
                                name: string;
                                guildId: string;
                                venueId: string | null;
                                actId: string | null;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                isActive: boolean;
                                createdById: string | null;
                                currentOwnerId: string;
                                clubId: string | null;
                            } | null;
                            venue: {
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                venueId: string;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                            } | null;
                            acts: {
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                actId: string;
                                bio: string | null;
                            }[];
                        } & {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            eventId: string;
                            title: string | null;
                            poster: string | null;
                            startTime: Date;
                            duration: number;
                            eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                            visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                            guildId: string | null;
                            venueId: string | null;
                        }) | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    events: {};
} & {
    events: {
        get: {
            body: unknown;
            params: {};
            query: {
                page?: number | undefined;
                limit?: number | undefined;
                eventType?: "GIG" | "REHEARSAL" | "SHOW_OFFER" | undefined;
                visibility?: "PUBLIC" | "PRIVATE" | undefined;
                guildId?: string | undefined;
                venueId?: string | undefined;
                actId?: string | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    events: ({
                        guild: {
                            createdAt: Date;
                            name: string;
                            guildId: string;
                            venueId: string | null;
                            actId: string | null;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            clubId: string | null;
                        } | null;
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        acts: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        guildId: string | null;
                        venueId: string | null;
                    })[];
                    total: number;
                    page: number;
                    limit: number;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            patch: {
                body: {
                    description?: string | undefined;
                    title?: string | undefined;
                    poster?: string | undefined;
                    startTime?: string | undefined;
                    duration?: number | undefined;
                    eventType?: "GIG" | "REHEARSAL" | "SHOW_OFFER" | undefined;
                    visibility?: "PUBLIC" | "PRIVATE" | undefined;
                    venueId?: string | undefined;
                };
                params: {
                    eventId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: ({
                        guild: {
                            createdAt: Date;
                            name: string;
                            guildId: string;
                            venueId: string | null;
                            actId: string | null;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            clubId: string | null;
                        } | null;
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        acts: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        guildId: string | null;
                        venueId: string | null;
                    }) | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            delete: {
                body: unknown;
                params: {
                    eventId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            get: {
                body: unknown;
                params: {
                    eventId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: ({
                        guild: {
                            createdAt: Date;
                            name: string;
                            guildId: string;
                            venueId: string | null;
                            actId: string | null;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            clubId: string | null;
                        } | null;
                        venue: ({
                            guild: {
                                createdAt: Date;
                                name: string;
                                guildId: string;
                                venueId: string | null;
                                actId: string | null;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                isActive: boolean;
                                createdById: string | null;
                                currentOwnerId: string;
                                clubId: string | null;
                            } | null;
                        } & {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        }) | null;
                        acts: ({
                            guild: {
                                createdAt: Date;
                                name: string;
                                guildId: string;
                                venueId: string | null;
                                actId: string | null;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                isActive: boolean;
                                createdById: string | null;
                                currentOwnerId: string;
                                clubId: string | null;
                            } | null;
                        } & {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        })[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        guildId: string | null;
                        venueId: string | null;
                    }) | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    follows: {};
} & {
    follows: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    follows: ({
                        guild: ({
                            venue: {
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                venueId: string;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                            } | null;
                            act: {
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                actId: string;
                                bio: string | null;
                            } | null;
                            club: {
                                description: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                clubId: string;
                            } | null;
                        } & {
                            createdAt: Date;
                            name: string;
                            guildId: string;
                            venueId: string | null;
                            actId: string | null;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            clubId: string | null;
                        }) | null;
                        followedUser: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        } | null;
                        tag: {
                            tagId: string;
                            category: string;
                            value: string;
                        } | null;
                    } & {
                        userId: string;
                        createdAt: Date;
                        guildId: string | null;
                        followId: string;
                        entityType: import("@archeusllc/schema/prisma-client/client").$Enums.FollowEntityType;
                        followedUserId: string | null;
                        tagId: string | null;
                    })[];
                    total: number;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    follows: {
        post: {
            body: {
                guildId?: string | undefined;
                followedUserId?: string | undefined;
                tagId?: string | undefined;
                entityType: "USER" | "TAG" | "GUILD";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: ({
                    guild: ({
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        act: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        } | null;
                        club: {
                            description: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            clubId: string;
                        } | null;
                    } & {
                        createdAt: Date;
                        name: string;
                        guildId: string;
                        venueId: string | null;
                        actId: string | null;
                        guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        isActive: boolean;
                        createdById: string | null;
                        currentOwnerId: string;
                        clubId: string | null;
                    }) | null;
                    followedUser: {
                        email: string;
                        displayName: string | null;
                        firebaseUid: string | null;
                        userId: string;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                    } | null;
                    tag: {
                        tagId: string;
                        category: string;
                        value: string;
                    } | null;
                } & {
                    userId: string;
                    createdAt: Date;
                    guildId: string | null;
                    followId: string;
                    entityType: import("@archeusllc/schema/prisma-client/client").$Enums.FollowEntityType;
                    followedUserId: string | null;
                    tagId: string | null;
                }) | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    follows: {
        ":followId": {
            delete: {
                body: unknown;
                params: {
                    followId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    tracks: {
        search: {
            get: {
                body: unknown;
                params: {};
                query: {
                    query?: string | undefined;
                    type?: string | undefined;
                    limit?: number | undefined;
                    offset?: number | undefined;
                    sortBy?: string | undefined;
                    sortOrder?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        data: import("@archeusllc/schema").TrackSearchResult[];
                        total: number;
                        limit: number;
                        offset: number;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    acts: {};
} & {
    acts: {
        get: {
            body: unknown;
            params: {};
            query: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                myGuilds?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    guilds: ({
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        act: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        } | null;
                        currentOwner: {
                            displayName: string | null;
                            userId: string;
                            avatar: string | null;
                        };
                        guildMembers: {
                            userId: string;
                            user: {
                                displayName: string | null;
                                avatar: string | null;
                            };
                            role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                        }[];
                        club: {
                            description: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            clubId: string;
                        } | null;
                    } & {
                        createdAt: Date;
                        name: string;
                        guildId: string;
                        venueId: string | null;
                        actId: string | null;
                        guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        isActive: boolean;
                        createdById: string | null;
                        currentOwnerId: string;
                        clubId: string | null;
                    })[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    acts: {
        ":actId": {
            get: {
                body: unknown;
                params: {
                    actId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    acts: {
        post: {
            body: {
                avatar?: string | undefined;
                bio?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./types").GuildResponse | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    acts: {
        ":actId": {
            patch: {
                body: {
                    avatar?: string | undefined;
                    name?: string | undefined;
                    bio?: string | undefined;
                };
                params: {
                    actId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    acts: {
        ":actId": {
            delete: {
                body: unknown;
                params: {
                    actId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    clubs: {};
} & {
    clubs: {
        get: {
            body: unknown;
            params: {};
            query: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                myGuilds?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    guilds: ({
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        act: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        } | null;
                        currentOwner: {
                            displayName: string | null;
                            userId: string;
                            avatar: string | null;
                        };
                        guildMembers: {
                            userId: string;
                            user: {
                                displayName: string | null;
                                avatar: string | null;
                            };
                            role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                        }[];
                        club: {
                            description: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            clubId: string;
                        } | null;
                    } & {
                        createdAt: Date;
                        name: string;
                        guildId: string;
                        venueId: string | null;
                        actId: string | null;
                        guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        isActive: boolean;
                        createdById: string | null;
                        currentOwnerId: string;
                        clubId: string | null;
                    })[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    clubs: {
        ":clubId": {
            get: {
                body: unknown;
                params: {
                    clubId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    clubs: {
        post: {
            body: {
                description?: string | undefined;
                avatar?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./types").GuildResponse | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    clubs: {
        ":clubId": {
            patch: {
                body: {
                    description?: string | undefined;
                    avatar?: string | undefined;
                    name?: string | undefined;
                };
                params: {
                    clubId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    clubs: {
        ":clubId": {
            delete: {
                body: unknown;
                params: {
                    clubId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {};
} & {
    venues: {
        get: {
            body: unknown;
            params: {};
            query: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                myGuilds?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    guilds: ({
                        venue: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        act: {
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            actId: string;
                            bio: string | null;
                        } | null;
                        currentOwner: {
                            displayName: string | null;
                            userId: string;
                            avatar: string | null;
                        };
                        guildMembers: {
                            userId: string;
                            user: {
                                displayName: string | null;
                                avatar: string | null;
                            };
                            role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                        }[];
                        club: {
                            description: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            clubId: string;
                        } | null;
                    } & {
                        createdAt: Date;
                        name: string;
                        guildId: string;
                        venueId: string | null;
                        actId: string | null;
                        guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        isActive: boolean;
                        createdById: string | null;
                        currentOwnerId: string;
                        clubId: string | null;
                    })[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            get: {
                body: unknown;
                params: {
                    venueId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {
        post: {
            body: {
                avatar?: string | undefined;
                address?: string | undefined;
                city?: string | undefined;
                state?: string | undefined;
                zipCode?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./types").GuildResponse | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            patch: {
                body: {
                    avatar?: string | undefined;
                    name?: string | undefined;
                    address?: string | undefined;
                    city?: string | undefined;
                    state?: string | undefined;
                    zipCode?: string | undefined;
                };
                params: {
                    venueId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            delete: {
                body: unknown;
                params: {
                    venueId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    me: {
        invitations: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        invitations: {
                            id: string;
                            guildId: string;
                            userId: string;
                            invitedBy: string | null;
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            createdAt: string;
                            guild: {
                                guildId: string;
                                name: string;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                avatar: string | null;
                            };
                            inviter: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            } | null;
                        }[];
                        error?: undefined;
                    } | {
                        error: string;
                        invitations?: undefined;
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: {
                        page?: number | undefined;
                        limit?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            members: {
                                userId: string;
                                user: {
                                    email: string;
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                                guildId: string;
                                id: string;
                                role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                                joinedAt: Date;
                            }[];
                            total: number;
                            page: number;
                            limit: number;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                post: {
                    body: {
                        role?: "OWNER" | "ADMIN" | "MEMBER" | undefined;
                        userId: string;
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            userId: string;
                            user: {
                                email: string;
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            };
                            guildId: string;
                            id: string;
                            role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                            joinedAt: Date;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                ":userId": {
                    delete: {
                        body: unknown;
                        params: {
                            userId: string;
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                ":userId": {
                    patch: {
                        body: {
                            role: "OWNER" | "ADMIN" | "MEMBER";
                        };
                        params: {
                            userId: string;
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                userId: string;
                                user: {
                                    email: string;
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                                guildId: string;
                                id: string;
                                role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                                joinedAt: Date;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                post: {
                    body: {
                        userId: string;
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            createdAt: Date;
                            guildId: string;
                            invitationId: string;
                            invitedUserId: string;
                            invitedById: string | null;
                            respondedAt: Date | null;
                            invitedUser: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            };
                            invitedBy: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            } | null;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: {
                        status?: "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED" | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            createdAt: Date;
                            guildId: string;
                            invitationId: string;
                            invitedUserId: string;
                            invitedById: string | null;
                            respondedAt: Date | null;
                            invitedUser: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            };
                            invitedBy: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            } | null;
                        }[] | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                ":invitationId": {
                    patch: {
                        body: {
                            status: "ACCEPTED" | "REJECTED";
                        };
                        params: {
                            guildId: string;
                            invitationId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                                createdAt: Date;
                                guildId: string;
                                invitationId: string;
                                invitedUserId: string;
                                invitedById: string | null;
                                respondedAt: Date | null;
                                invitedUser: {
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                                invitedBy: {
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                } | null;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            delete: {
                body: unknown;
                params: {
                    guildId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    search: {
        users: {
            get: {
                body: unknown;
                params: {};
                query: {
                    limit?: string | undefined;
                    q?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        users: {
                            email: string;
                            displayName: string | null;
                            userId: string;
                            avatar: string | null;
                        }[];
                        error?: undefined;
                    } | {
                        error: string;
                        users?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {};
} & {
    setlist: {
        post: {
            body: {
                description?: string | undefined;
                guildId?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: ({
                    setItems: ({
                        track: {
                            type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                            createdAt: Date;
                            updatedAt: Date;
                            title: string;
                            isActive: boolean;
                            createdBy: string;
                            trackId: string;
                            artist: string;
                            defaultDuration: number | null;
                            defaultTuning: string | null;
                        };
                        section: {
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        } | null;
                    } & {
                        createdAt: Date;
                        updatedAt: Date;
                        trackId: string;
                        setListId: string;
                        setItemId: string;
                        position: number;
                        customTuning: string | null;
                        customNotes: string | null;
                        customDuration: number | null;
                        sectionId: string | null;
                    })[];
                    setSections: {
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        setListId: string;
                        position: number;
                        sectionId: string;
                        breakDuration: number | null;
                    }[];
                    shares: {
                        createdAt: Date;
                        createdBy: string;
                        setListId: string;
                        shareId: string;
                        shareToken: string;
                        permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                        expiresAt: Date | null;
                    }[];
                } & {
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    guildId: string | null;
                    setListId: string;
                    isPrivate: boolean;
                    ownerId: string;
                }) | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    setlist: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    personal: ({
                        guild: {
                            createdAt: Date;
                            name: string;
                            guildId: string;
                            venueId: string | null;
                            actId: string | null;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            clubId: string | null;
                        } | null;
                        setItems: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                title: string;
                                isActive: boolean;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            trackId: string;
                            setListId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        })[];
                        shares: {
                            createdAt: Date;
                            createdBy: string;
                            setListId: string;
                            shareId: string;
                            shareToken: string;
                            permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                            expiresAt: Date | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        guildId: string | null;
                        setListId: string;
                        isPrivate: boolean;
                        ownerId: string;
                    })[];
                    shared: ({
                        setItems: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                title: string;
                                isActive: boolean;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            trackId: string;
                            setListId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        })[];
                        shares: {
                            createdAt: Date;
                            createdBy: string;
                            setListId: string;
                            shareId: string;
                            shareToken: string;
                            permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                            expiresAt: Date | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        guildId: string | null;
                        setListId: string;
                        isPrivate: boolean;
                        ownerId: string;
                    })[];
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            patch: {
                body: {
                    description?: string | undefined;
                    name?: string | undefined;
                    guildId?: string | null | undefined;
                };
                params: {
                    setlistId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: ({
                        setItems: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                title: string;
                                isActive: boolean;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                            section: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | null;
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            trackId: string;
                            setListId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        })[];
                        setSections: {
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        }[];
                        shares: {
                            createdAt: Date;
                            createdBy: string;
                            setListId: string;
                            shareId: string;
                            shareToken: string;
                            permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                            expiresAt: Date | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        guildId: string | null;
                        setListId: string;
                        isPrivate: boolean;
                        ownerId: string;
                    }) | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            delete: {
                body: unknown;
                params: {
                    setlistId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            duplicate: {
                post: {
                    body: unknown;
                    params: {
                        setlistId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    title: string;
                                    isActive: boolean;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    name: string;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                trackId: string;
                                setListId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            setSections: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                            shares: {
                                createdAt: Date;
                                createdBy: string;
                                setListId: string;
                                shareId: string;
                                shareToken: string;
                                permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                                expiresAt: Date | null;
                            }[];
                        } & {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            guildId: string | null;
                            setListId: string;
                            isPrivate: boolean;
                            ownerId: string;
                        }) | {
                            error: string;
                        } | null;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            items: {
                post: {
                    body: {
                        position?: number | undefined;
                        customTuning?: string | undefined;
                        customNotes?: string | undefined;
                        customDuration?: number | undefined;
                        sectionId?: string | undefined;
                        trackId: string;
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        shareToken?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                title: string;
                                isActive: boolean;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                            section: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | null;
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            trackId: string;
                            setListId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        }) | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            items: {
                ":setItemId": {
                    patch: {
                        body: {
                            customTuning?: string | undefined;
                            customNotes?: string | undefined;
                            customDuration?: number | undefined;
                            sectionId?: string | null | undefined;
                        };
                        params: {
                            setItemId: string;
                            setlistId: string;
                        };
                        query: {
                            shareToken?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    title: string;
                                    isActive: boolean;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    name: string;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                trackId: string;
                                setListId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            }) | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            items: {
                ":setItemId": {
                    delete: {
                        body: unknown;
                        params: {
                            setItemId: string;
                            setlistId: string;
                        };
                        query: {
                            shareToken?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                success: boolean;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            reorder: {
                post: {
                    body: {
                        itemPositions: {
                            setItemId: string;
                            position: number;
                        }[];
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        shareToken?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    title: string;
                                    isActive: boolean;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    name: string;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                trackId: string;
                                setListId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                        } & {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            guildId: string | null;
                            setListId: string;
                            isPrivate: boolean;
                            ownerId: string;
                        }) | {
                            error: string;
                        } | null;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            reorder: {
                post: {
                    body: {
                        itemPositions?: {
                            setItemId: string;
                            position: number;
                        }[] | undefined;
                        sectionPositions?: {
                            position: number;
                            sectionId: string;
                        }[] | undefined;
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        shareToken?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    title: string;
                                    isActive: boolean;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    name: string;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                trackId: string;
                                setListId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            setSections: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                        } & {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            guildId: string | null;
                            setListId: string;
                            isPrivate: boolean;
                            ownerId: string;
                        }) | {
                            error: string;
                        } | null;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                reorder: {
                    post: {
                        body: {
                            sectionPositions: {
                                position: number;
                                sectionId: string;
                            }[];
                        };
                        params: {
                            setlistId: string;
                        };
                        query: {
                            shareToken?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: ({
                                setItems: ({
                                    track: {
                                        type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        title: string;
                                        isActive: boolean;
                                        createdBy: string;
                                        trackId: string;
                                        artist: string;
                                        defaultDuration: number | null;
                                        defaultTuning: string | null;
                                    };
                                    section: {
                                        createdAt: Date;
                                        updatedAt: Date;
                                        name: string;
                                        setListId: string;
                                        position: number;
                                        sectionId: string;
                                        breakDuration: number | null;
                                    } | null;
                                } & {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    trackId: string;
                                    setListId: string;
                                    setItemId: string;
                                    position: number;
                                    customTuning: string | null;
                                    customNotes: string | null;
                                    customDuration: number | null;
                                    sectionId: string | null;
                                })[];
                                setSections: {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    name: string;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                }[];
                            } & {
                                description: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                guildId: string | null;
                                setListId: string;
                                isPrivate: boolean;
                                ownerId: string;
                            }) | {
                                error: string;
                            } | null;
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                post: {
                    body: {
                        position?: number | undefined;
                        name: string;
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        shareToken?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                ":sectionId": {
                    patch: {
                        body: {
                            name?: string | undefined;
                            breakDuration?: number | null | undefined;
                        };
                        params: {
                            sectionId: string;
                            setlistId: string;
                        };
                        query: {
                            shareToken?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                ":sectionId": {
                    delete: {
                        body: unknown;
                        params: {
                            sectionId: string;
                            setlistId: string;
                        };
                        query: {
                            shareToken?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                success: boolean;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            shares: {
                post: {
                    body: {
                        expiresAt?: string | undefined;
                        permission: "VIEW_ONLY" | "CAN_EDIT";
                    };
                    params: {
                        setlistId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            createdAt: Date;
                            createdBy: string;
                            setListId: string;
                            shareId: string;
                            shareToken: string;
                            permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                            expiresAt: Date | null;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            shares: {
                get: {
                    body: unknown;
                    params: {
                        setlistId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            creator: {
                                email: string;
                                displayName: string | null;
                                userId: string;
                            };
                        } & {
                            createdAt: Date;
                            createdBy: string;
                            setListId: string;
                            shareId: string;
                            shareToken: string;
                            permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                            expiresAt: Date | null;
                        })[] | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            shares: {
                ":shareId": {
                    delete: {
                        body: unknown;
                        params: {
                            shareId: string;
                            setlistId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                success: boolean;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        "by-token": {
            ":shareToken": {
                get: {
                    body: unknown;
                    params: {
                        shareToken: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            guild: {
                                createdAt: Date;
                                name: string;
                                guildId: string;
                                venueId: string | null;
                                actId: string | null;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                isActive: boolean;
                                createdById: string | null;
                                currentOwnerId: string;
                                clubId: string | null;
                            } | null;
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    title: string;
                                    isActive: boolean;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    name: string;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                trackId: string;
                                setListId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            owner: {
                                email: string;
                                userId: string;
                            };
                            setSections: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                            shares: {
                                createdAt: Date;
                                createdBy: string;
                                setListId: string;
                                shareId: string;
                                shareToken: string;
                                permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                                expiresAt: Date | null;
                            }[];
                        } & {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            guildId: string | null;
                            setListId: string;
                            isPrivate: boolean;
                            ownerId: string;
                        }) | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            get: {
                body: unknown;
                params: {
                    setlistId: string;
                };
                query: {
                    shareToken?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: ({
                        guild: {
                            createdAt: Date;
                            name: string;
                            guildId: string;
                            venueId: string | null;
                            actId: string | null;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            clubId: string | null;
                        } | null;
                        setItems: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                title: string;
                                isActive: boolean;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                            section: {
                                createdAt: Date;
                                updatedAt: Date;
                                name: string;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | null;
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            trackId: string;
                            setListId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        })[];
                        owner: {
                            email: string;
                            userId: string;
                        };
                        setSections: {
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        }[];
                        shares: {
                            createdAt: Date;
                            createdBy: string;
                            setListId: string;
                            shareId: string;
                            shareToken: string;
                            permission: import("@archeusllc/schema/prisma-client/client").$Enums.SharePermission;
                            expiresAt: Date | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        guildId: string | null;
                        setListId: string;
                        isPrivate: boolean;
                        ownerId: string;
                    }) | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            ws: {
                subscribe: {
                    body: {};
                    params: {
                        setlistId: string;
                    };
                    query: {
                        userId?: string | undefined;
                        shareToken?: string | undefined;
                        userName?: string | undefined;
                    };
                    headers: {};
                    response: {
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    [x: string]: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
}>;
export type App = typeof app;
export {};
