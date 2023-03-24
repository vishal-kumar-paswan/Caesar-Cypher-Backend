# Caesar Cypher Backend

Caesar cipher is a simple method of encoding messages. Caesar ciphers use a substitution method where letters in the alphabet are shifted by some fixed number of spaces to yield an encoding alphabet. A Caesar cipher with a shift of 1 would encode an A as a B, an M as an N, and a Z as an A, and so on.

Source : [brilliant.org](https://brilliant.org/wiki/caesar-cipher/#:~:text=A%20Caesar%20cipher%20is%20a,an%20A%2C%20and%20so%20on.)

# API Referenece

## For Encryption

Send a POST request at the following URL : https://caesar-cypher-backend.vercel.app/encrypt-text/

## Required parameters

### text: String

### key: Integer

## Request Body

```
{
    "text": "Abc123",
    "key": "1"
}
```

## Response Body

```
{
    "encrypted-text": "Bcd234"
}
```

## For Decryption

Send a POST request at the following URL : https://caesar-cypher-backend.vercel.app/decrypt-text/

## Required parameters

### text: String

### key: Integer

## Request Body

```
{
    "text": "Bcd234",
    "key": "1"
}
```

## Response Body

```
{
    "decrypted-text": "Abc123"
}
```
