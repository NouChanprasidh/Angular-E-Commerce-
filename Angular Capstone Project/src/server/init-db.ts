import { connectDB } from '../app/config/database.config';
import { Product } from '../app/models/product.model';

const initialProducts = [
  {
    id: 1,
    name: 'ASUS ROG Strix G18',
    price: 1500,
    oldPrice: 1800,
    image: '../../assets/img/product-thumb-1.jpg',
    description: 'High-performance gaming laptop with latest generation processor',
    category: 'Gaming'
  },
  // ... add all your other products here
];

const initDB = async () => {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert new products
    await Product.insertMany(initialProducts);
    
    console.log('Database initialized successfully');
    process.exit(0);
  } catch (error: any) {
    console.error('Error initializing database:', error.message);
    process.exit(1);
  }
};

initDB(); 