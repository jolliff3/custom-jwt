To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

e.g. HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

Header:
{
"alg": "HS256",
"typ": "JWT"
}
