export class User {
    constructor (opacities, location) {
        this.opacities = opacities;
        this.location = location;
    }
    toString() {
        return this.opacities + ', ' + this.location;
    }
}

// Firestore data converter
export const userConverter = {
    toFirestore: (user) => {
        return {
            opacities: user.opacities,
            location: user.location
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.opacities, data.location);
    }
};