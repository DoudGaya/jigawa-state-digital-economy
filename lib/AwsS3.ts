import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from 'dotenv';
dotenv.config();

// import { env } from "process";
import process from "process"; 

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});





export const uploadFileToS3 = async (file: File, bucketName: string): Promise<string> => {
  const fileName = `${Date.now()}-${file.name}`;
  const upload = new Upload({
    client: await s3Client,
    params: {
      Bucket: bucketName,
      Key: fileName,
      Body: file,
      ContentType: file.type,
    },
  });



  try {
    const result = await upload.done();
    return result.Location || '';
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

export const uploadMultipleFilesToS3 = async (files: FileList, bucketName: string): Promise<string[]> => {
  const uploadPromises = Array.from(files).map(file => uploadFileToS3(file, bucketName));
  return Promise.all(uploadPromises);
};