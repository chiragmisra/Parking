export class ParkingSpaceModel {  

    constructor(
        public monday: string,
        public tuesday: string,
        public wednesday: string,
        public thursday: string,
        public friday: string,
        public fromDate: string,
        public toDate: string,
        public note: string
    ){}
}