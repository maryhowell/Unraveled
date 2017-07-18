# Schema Information

## users

| column name     | data type | details                   |
|:----------------|:---------:|:--------------------------|
| id              | integer   | not null, primary key     |
| first_name      | string    | not null                  |
| last_name       | string    | not null                  |
| email           | string    | not null, indexed, unique |              
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| seller          | boolean   | not null, default false   |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |

## patterns

| column name      | data type | details                   |
|:-----------------|:---------:|:--------------------------|
| id               | integer   | not null, primary key     |
| seller_id        | integer   | not null                  |
| name             | string    | not null                  |
| image_url        | string    | not null, array true      |
| short_description| string    | not null                  |
| long_description | text      | not null                  |              
| price            | integer   | not null                  |
| tags             | integer   | not null, array or polymorphic|
| materials        | string    | not null                  |
| pattern_spec     | string    | not null                  |
| pattern_url      | string    | not null                  |
| category         | string    | not null                  |
| created_at       | datetime  | not null                  |
| updated_at       | datetime  | not null                  |      

## cart

| column name     | data type | details                                                            |
|:----------------|:---------:|:-------------------------------------------------------------------|
| id              | integer   | not null, primary key                                              |
| user_id         | integer   | not null                                                           |
| purchased       | boolean   | not null, default false, user can only have one not purchased cart |
| created_at      | datetime  | not null                                                           |
| updated_at      | datetime  | not null                                                           |  

## cart_patterns

| column name     | data type | details                   |
|:----------------|:---------:|:--------------------------|
| id              | integer   | not null, primary key     |
| cart_id         | integer   | not null                  |
| pattern_id      | integer   | not null                  |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |

## reviews

| column name     | data type | details                   |
|:----------------|:---------:|:--------------------------|
| id              | integer   | not null, primary key     |
| item_id         | integer   | not null                  |
| user_id         | integer   | not null                  |
| rating          | integer   | not null                  |
| description     | text      | not null                  |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |


## favorites

| column name     | data type | details                   |
|:----------------|:---------:|:--------------------------|
| id              | integer   | not null, primary key     |
| pattern_id      | integer   | not null, indexed         |
| user_id         | integer   | not null, indexed         |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |

## tags

| column name     | data type | details                   |
|:----------------|:---------:|:--------------------------|
| id              | integer   | not null, primary key     |
| tag_name        | string    | not null                  |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |
