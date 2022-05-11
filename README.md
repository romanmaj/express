# Test login app
Running
```bash
npm i
npm start
```
# Testing
Before testing, you must register with
```bash
localhost:5000/api/registration
```
with body
```json
{
  "email": "your_email@example.com",
  "password": "your_password"
}
```
Then you can test login method with
```bash
localhost:5000/api/login
```
with body
```json
{
  "email": "your_email@example.com",
  "password": "your_password"
}
```
