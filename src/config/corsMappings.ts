interface RouteCorsConfig {
  methods: string[];
}

export const corsMappings: Record<string, RouteCorsConfig> = {
  "/login": { methods: ["POST"] },
};