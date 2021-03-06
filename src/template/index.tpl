<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .file-list{
            width:100%;
            list-style:none
        }
        .file{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width:100%;
            height:30px;
            padding-left:50px;
        }
    </style>
</head>
<body>
    <ul class="file-list">
        {{#each files}}
            <li class="file">
                <a href="{{../dir}}/{{this}}">{{this}}</a>
            </li>
        {{/each}}
  </ul>
</body>
</html>