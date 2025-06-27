-- Create database schema for 7AM Diamond platform (Database Only)

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    phone VARCHAR(20),
    coin_balance DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions table (Simple tracking)
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    type VARCHAR(50) NOT NULL, -- 'coin_purchase', 'diamond_purchase'
    amount DECIMAL(10,2) NOT NULL,
    coins DECIMAL(10,2),
    status VARCHAR(50) DEFAULT 'completed', -- 'completed', 'pending', 'failed'
    game_account_id VARCHAR(255),
    server_id VARCHAR(100),
    diamond_amount INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Diamond packages table
CREATE TABLE IF NOT EXISTS diamond_packages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    diamond_amount INTEGER NOT NULL,
    coin_price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    discount_percent INTEGER DEFAULT 0,
    is_popular BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
