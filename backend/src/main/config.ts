import Joi from "joi";
import { config } from "dotenv";
import { Result } from "./utils";

type Config = {
  PORT: number;
};

export const loadConfig = (): Result<Config> => {
  const env = config();

  if (env.error) {
    return [null, env.error];
  }

  const validation = configSchema.validate(env.parsed);

  if (validation.error) {
    return [null, validation.error];
  }

  return [validation.value, null];
};

// I feel like a type safe library should already exist which does this in so many ways
const configSchema = Joi.object<Config>({
  PORT: Joi.number().integer().required(),
}).options({
  stripUnknown: true,
});
