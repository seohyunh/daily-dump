CREATE DATABASE dailydump;

CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID, -- Placeholder for the user_id, no foreign key constraint yet
    title VARCHAR(100) NOT NULL,
    cover_photo VARCHAR(255),
    short_description TEXT,
    date DATE NOT NULL,
    time TIME NOT NULL
);

CREATE TABLE post_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    content_type VARCHAR(10) CHECK (content_type IN ('text', 'image')),
    content TEXT, -- For text content
    image_url VARCHAR(255), -- For image content
    order_num INT NOT NULL -- To track the order of the blocks
);