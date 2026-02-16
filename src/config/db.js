import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


export const connectDB = async () => {
    try {
        await pool.query('SELECT 1');
        console.log('db connected');
    } catch (error) {
        console.error(' connection failed:', error.message);
        process.exit(1);
    }
};

export default pool;