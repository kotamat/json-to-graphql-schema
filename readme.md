# json-to-graphql-schema

CLIで簡単にgraphqlのスキーマを作成するやつです。

## 使用方法

```bash
node index.js -i <jsonファイルへのファイルパス> -n <プレフィックスにつける名前>
```

## 使用例


input.jsonを下記のように用意する
```json:input.json
{
    "hoge": "fuga",
    "num": 1,
    "nested":{
        "object":{
            "key":"value"
        }
    }
}
```

cli上で実行
```bash
$ node index.js -i ./input.json -n Prefix -k Key
"""Provides default value for input field."""
directive @default(value: JSON!) on INPUT_FIELD_DEFINITION

"""
The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

type Prefix {
  hoge: String
  num: Float
  nested: Prefix_Nested
}

type Prefix_Nested {
  object: Prefix_Nested_Object
}

type Prefix_Nested_Object {
  key: String
}

type Query {
  Key: Prefix
}
```


