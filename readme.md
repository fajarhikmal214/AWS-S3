# AWS - S3

This repository contains multiple endpoints to perform some requests using the AWS S3 API

### [GET] /images/:key

URL untuk mendapatkan image berdasarkan key object

<details>
	<summary>Expand/Collapse</summary>

#### Auth

None

#### Path Parameter

None

#### Params

None

#### Body

None

#### Responses

200 OK

Returning an image

</details>

### [POST] /images

URL untuk mengupload image ke S3 Bucket

<details>
	<summary>Expand/Collapse</summary>

#### Auth

None

#### Path Parameter

None

#### Params

None

#### Body

```json
{
  "image": "Image File"
}
```

#### Responses

200 OK

```json
{
  "imagePath": "/images/{objectKey}"
}
```

</details>
