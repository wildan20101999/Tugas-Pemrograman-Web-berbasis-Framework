import { Router } from 'https://deno.land/x/oak/mod.ts';
import { home, product, saveproduk, kategori } from './controllers/blog.ts';
const router = new Router();

router
    .get("/", home)
    .get("/dataproduk", product)
    .post("/simpanproduk", saveproduk)
    .get("/kategori/:id", kategori);

export default router;
