import dotenv from 'dotenv';

const env = dotenv.config() as { parsed: { BLA: string; } };

export default env;