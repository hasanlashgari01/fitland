import { httpInterceptedService } from "../core/http-service";

export const getDashboard = async () => await httpInterceptedService("/admin/dashboard-stats").then((res) => res.data);
