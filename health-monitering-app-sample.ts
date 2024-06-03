//health app 
interface HealthMatric {
    steps: number;
    heartRate: number;
    caloriesBurned: number;

    class HealthMoniteringApp{
        private weariableDevice: WearableDevice;


        constructor(wearableDevice: WearableDevice){
            this.weariableDevice = wearableDevice;
        }

        async trackHealthMatrices(): Promise<HealthMatric>{
            const steps = await this.weariableDevice.getSteps();
            const heartRate = await this.weariableDevice.getHeartRate();
            const caloriesBurned = await this.weariableDevice.getCaloriesBurned();

            return{ steps, heartRate, caloriesBurned};
        }
    }


    interface WearableDevice {
        getSteps(): Promise <number>;
        getHeartRate(): Promise <number>;
        getCaloriesBurned(): Promise <number>;
    }

    class FibitWearableDevice implements WearableDevice {
        private fitbitApi: FitibitApi;

        constructor (fitibitApi: FitibitApi){
            this.fitbitApi = fitibitApi;

        }

        async getSteps(): Promise<number> {
            const response = await this.fitbitApi.getActivities();
            return response.steps;
        }

        async getHeartRate(): Promise<number> {
            const response = await this.fitbitApi.getHeartRate();
            return response.heartRate;
        }

        async getCaloriesBurned(): Promise<number> {
            const response = await this.fitbitApi.getCaloriesBurned();
            return response.caloriesBurned;
        }
    }


    class FitibitApi{

        async getActivities(): Promise<{ steps: number}> {

        }
        async getHeartRate(): Promise<{ heartRate: number}>{

        }
        async getCaloriesBurned(): Promise<{ caloriesBurned: number}>{

        }
    }

    const fitibitApi = new FitibitApi();
    const wearableDevice = new FibitWearableDevice(fitibitApi);
    const healthMoniteringApp = new HealthMoniteringApp(wearableDevice);

    healthMoniteringApp.trackHealthMatrices().then((healthMetrics) =>{
        console.log(`Steps: ${healthMetrics.steps}`);
        console.log(`Heart Rate ${healthMetrics.heartRate}`);
        console.log(`Calories Burned: ${healthMetrics.caloriesBurned}`);
    });