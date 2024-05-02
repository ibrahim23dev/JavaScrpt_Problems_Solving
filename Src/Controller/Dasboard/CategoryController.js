const { responseReturn } = require('../../utils/response');
const CategoryModel = require('../../Model/CategoryModel');
const cloudinary = require('cloudinary').v2;
const formidable = require('formidable');

class CategoryController {
    addCategory = async (req, res) => {
        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {
            if (err) {
                responseReturn(res, 500, { error: 'Something went wrong' });
                return;
            }

          
            if (!fields.name || !files.image) {
                responseReturn(res, 400, { error: 'Name and image are required' });
                return;
            }

            try {
                let { name } = fields;
                name = name.trim();
                const slug = name.split(' ').join('-');

                cloudinary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.api_key,
                    api_secret: process.env.api_secret,
                    secure: true
                });

                const result = await cloudinary.uploader.upload(files.image.path, { folder: 'Category' });

                if (!result || !result.url) {
                    responseReturn(res, 500, { error: 'Image upload failed' });
                    return;
                }

                const category = await CategoryModel.create({
                    name,
                    slug,
                    image: result.url
                });

                responseReturn(res, 201, { category, message: 'Category added successfully' });
            } catch (error) {
                console.error('Error:', error);
                responseReturn(res, 500, { error: 'Internal server error' });
            }
        });
    };

    getCategory = async (req, res) => {
       
}
}
module.exports = new CategoryController();
