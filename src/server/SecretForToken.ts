import { configModule } from "./ConfigModule";

export const secretForToken: string = configModule.getConfigValue(
  "secretForToken"
);
