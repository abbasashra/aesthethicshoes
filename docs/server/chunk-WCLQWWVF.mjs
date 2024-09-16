import './polyfills.server.mjs';
import{B as _,a,b as m,c as t,d as e,e as o,f as n,g as s,l as b,o as w,q as P,r as E,u as M,y as O}from"./chunk-F4CKH73N.mjs";var h=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-navbar"]],standalone:!0,features:[s],decls:19,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",m`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css`,"rel","stylesheet"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","fixed-top"],[1,"container-fluid"],[1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2","search-bar"],["href","#",1,"navbar-brand","ms-auto"],[2,"height","px","padding-top","100px"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"Aesthetic Shoes Navbar"),e(),o(6,"link",3),e(),t(7,"body")(8,"nav",4)(9,"div",5)(10,"form",6),o(11,"input",7),e(),t(12,"a",8),n(13,"AestheticShoes"),e()()(),t(14,"div",9)(15,"h1"),n(16,"Welcome to Aesthetic Shoes"),e(),t(17,"p"),n(18,"Your ultimate destination for trendy footwear!"),e()()()())},styles:[`

        .navbar[_ngcontent-%COMP%] {
            transition: background-color 0.4s ease;
        }

        .navbar[_ngcontent-%COMP%]:hover {
            background-color: #f8f9fa;
        }

        .search-bar[_ngcontent-%COMP%] {
            transition: width 0.4s ease;
            width: 180px;
        }

        .search-bar[_ngcontent-%COMP%]:focus {
            width: 240px;
        }

        

        .navbar.scrolled[_ngcontent-%COMP%] {
            background-color: #343a40 !important;
            transition: background-color 0.4s ease;
        }

        .navbar-brand[_ngcontent-%COMP%] {
            font-weight: bold;
            font-size: 1.5rem;
            color: #fff;
        }

        .navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
            border-radius: 30px;
        }`]})};var f=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-hero"]],standalone:!0,features:[s],decls:19,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",m`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css`,"rel","stylesheet"],["href",m`https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap`,"rel","stylesheet"],[1,"hero"],[1,"hero-content"],[1,"hero-title"],[2,"height","100px","background-color","#f8f9fa"],[1,"container","pt-5"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"Aesthetic Shoes - Parallax Hero"),e(),o(6,"link",3)(7,"link",4),e(),t(8,"body")(9,"div",5)(10,"div",6)(11,"h1",7),n(12,"AestheticShoes"),e()()(),t(13,"div",8)(14,"div",9)(15,"h2"),n(16,"Welcome to Aesthetic Shoes"),e(),t(17,"p"),n(18,"Discover the best shoes for style, comfort, and performance. Scroll down to explore more!"),e()()()()())},styles:[`

        .hero[_ngcontent-%COMP%] {
            height: 100vh;
            background-image: url('https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fHNob2VzfGVufDB8fHx8MTY4NTcwMjM3NQ&ixlib=rb-1.2.1&q=80&w=1080'); 

            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero-content[_ngcontent-%COMP%] {
            color: white;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
            font-family: 'Montserrat', sans-serif;
        }

        .hero-title[_ngcontent-%COMP%] {
            font-size: 5rem;
            font-weight: 600;
            letter-spacing: 2px;
            animation: _ngcontent-%COMP%_fadeIn 2s ease-in-out;
        }

        @media (max-width: 768px) {
            .hero-title[_ngcontent-%COMP%] {
                font-size: 3rem;
            }
        }

        

        @keyframes _ngcontent-%COMP%_fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }`]})};var u=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-product"]],standalone:!0,features:[s],decls:74,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",m`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css`,"rel","stylesheet"],["href",m`https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap`,"rel","stylesheet"],[1,"container"],[1,"product-title"],[1,"row","g-4"],[1,"col-md-4"],[1,"card","product-card"],["src","https://picsum.photos/300?random=1","alt","Product 1",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn"],["src","https://picsum.photos/300?random=2","alt","Product 2",1,"card-img-top"],["src","https://picsum.photos/300?random=3","alt","Product 3",1,"card-img-top"],["src","https://picsum.photos/300?random=4","alt","Product 4",1,"card-img-top"],["src","https://picsum.photos/300?random=5","alt","Product 5",1,"card-img-top"],["src","https://picsum.photos/300?random=6","alt","Product 6",1,"card-img-top"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"Casual Shoes - Product Section"),e(),o(6,"link",3)(7,"link",4),e(),t(8,"body")(9,"div",5)(10,"h1",6),n(11,"Casual Shoes"),e()(),t(12,"div",5)(13,"div",7)(14,"div",8)(15,"div",9),o(16,"img",10),t(17,"div",11)(18,"h5",12),n(19,"Casual Shoe 1"),e(),t(20,"p",13),n(21,"Stylish and comfortable casual shoe."),e(),t(22,"a",14),n(23,"Buy Now"),e()()()(),t(24,"div",8)(25,"div",9),o(26,"img",15),t(27,"div",11)(28,"h5",12),n(29,"Casual Shoe 2"),e(),t(30,"p",13),n(31,"Perfect for any occasion."),e(),t(32,"a",14),n(33,"Buy Now"),e()()()(),t(34,"div",8)(35,"div",9),o(36,"img",16),t(37,"div",11)(38,"h5",12),n(39,"Casual Shoe 3"),e(),t(40,"p",13),n(41,"Comfort and style in one."),e(),t(42,"a",14),n(43,"Buy Now"),e()()()(),t(44,"div",8)(45,"div",9),o(46,"img",17),t(47,"div",11)(48,"h5",12),n(49,"Casual Shoe 4"),e(),t(50,"p",13),n(51,"Simple yet trendy design."),e(),t(52,"a",14),n(53,"Buy Now"),e()()()(),t(54,"div",8)(55,"div",9),o(56,"img",18),t(57,"div",11)(58,"h5",12),n(59,"Casual Shoe 5"),e(),t(60,"p",13),n(61,"Perfect for daily wear."),e(),t(62,"a",14),n(63,"Buy Now"),e()()()(),t(64,"div",8)(65,"div",9),o(66,"img",19),t(67,"div",11)(68,"h5",12),n(69,"Casual Shoe 6"),e(),t(70,"p",13),n(71,"Step up your fashion game."),e(),t(72,"a",14),n(73,"Buy Now"),e()()()()()()()())},styles:[`

        body[_ngcontent-%COMP%] {
            font-family: 'Montserrat', sans-serif;
        }

        .product-title[_ngcontent-%COMP%] {
            text-align: center;
            margin: 40px 0;
            font-size: 2.5rem;
            font-weight: 600;
        }

        

        .product-card[_ngcontent-%COMP%] {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
        }

        .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #ddd;
        }

        .product-card[_ngcontent-%COMP%]:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .product-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {
            text-align: center;
            padding: 20px;
        }

        .product-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
            margin-top: 10px;
            background-color: #343a40;
            color: white;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {
            background-color: #495057;
        }`]})};var g=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-productformal"]],standalone:!0,features:[s],decls:74,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",m`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css`,"rel","stylesheet"],["href",m`https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap`,"rel","stylesheet"],[1,"container"],[1,"product-title"],[1,"row","g-4"],[1,"col-md-4"],[1,"card","product-card"],["src","https://picsum.photos/300?random=1","alt","Product 1",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn"],["src","https://picsum.photos/300?random=2","alt","Product 2",1,"card-img-top"],["src","https://picsum.photos/300?random=3","alt","Product 3",1,"card-img-top"],["src","https://picsum.photos/300?random=4","alt","Product 4",1,"card-img-top"],["src","https://picsum.photos/300?random=5","alt","Product 5",1,"card-img-top"],["src","https://picsum.photos/300?random=6","alt","Product 6",1,"card-img-top"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"FORMAL Shoes - Product Section"),e(),o(6,"link",3)(7,"link",4),e(),t(8,"body")(9,"div",5)(10,"h1",6),n(11,"Formal Shoes"),e()(),t(12,"div",5)(13,"div",7)(14,"div",8)(15,"div",9),o(16,"img",10),t(17,"div",11)(18,"h5",12),n(19,"Formal Shoe 1"),e(),t(20,"p",13),n(21,"Stylish and comfortable casual shoe."),e(),t(22,"a",14),n(23,"Buy Now"),e()()()(),t(24,"div",8)(25,"div",9),o(26,"img",15),t(27,"div",11)(28,"h5",12),n(29,"Formal Shoe 2"),e(),t(30,"p",13),n(31,"Perfect for any occasion."),e(),t(32,"a",14),n(33,"Buy Now"),e()()()(),t(34,"div",8)(35,"div",9),o(36,"img",16),t(37,"div",11)(38,"h5",12),n(39,"Formal Shoe 3"),e(),t(40,"p",13),n(41,"Comfort and style in one."),e(),t(42,"a",14),n(43,"Buy Now"),e()()()(),t(44,"div",8)(45,"div",9),o(46,"img",17),t(47,"div",11)(48,"h5",12),n(49,"Formal Shoe 4"),e(),t(50,"p",13),n(51,"Simple yet trendy design."),e(),t(52,"a",14),n(53,"Buy Now"),e()()()(),t(54,"div",8)(55,"div",9),o(56,"img",18),t(57,"div",11)(58,"h5",12),n(59,"Formal Shoe 5"),e(),t(60,"p",13),n(61,"Perfect for daily wear."),e(),t(62,"a",14),n(63,"Buy Now"),e()()()(),t(64,"div",8)(65,"div",9),o(66,"img",19),t(67,"div",11)(68,"h5",12),n(69,"Formal Shoe 6"),e(),t(70,"p",13),n(71,"Step up your fashion game."),e(),t(72,"a",14),n(73,"Buy Now"),e()()()()()()()())},styles:[`

        body[_ngcontent-%COMP%] {
            font-family: 'Montserrat', sans-serif;
        }

        .product-title[_ngcontent-%COMP%] {
            text-align: center;
            margin: 40px 0;
            font-size: 2.5rem;
            font-weight: 600;
        }

        

        .product-card[_ngcontent-%COMP%] {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
        }

        .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #ddd;
        }

        .product-card[_ngcontent-%COMP%]:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .product-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {
            text-align: center;
            padding: 20px;
        }

        .product-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
            margin-top: 10px;
            background-color: #343a40;
            color: white;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {
            background-color: #495057;
        }`]})};var x=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-sportshoes"]],standalone:!0,features:[s],decls:74,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",m`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css`,"rel","stylesheet"],["href",m`https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap`,"rel","stylesheet"],[1,"container"],[1,"product-title"],[1,"row","g-4"],[1,"col-md-4"],[1,"card","product-card"],["src","https://picsum.photos/300?random=1","alt","Product 1",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn"],["src","https://picsum.photos/300?random=2","alt","Product 2",1,"card-img-top"],["src","https://picsum.photos/300?random=3","alt","Product 3",1,"card-img-top"],["src","https://picsum.photos/300?random=4","alt","Product 4",1,"card-img-top"],["src","https://picsum.photos/300?random=5","alt","Product 5",1,"card-img-top"],["src","https://picsum.photos/300?random=6","alt","Product 6",1,"card-img-top"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"Casual Shoes - Product Section"),e(),o(6,"link",3)(7,"link",4),e(),t(8,"body")(9,"div",5)(10,"h1",6),n(11,"sport Shoes"),e()(),t(12,"div",5)(13,"div",7)(14,"div",8)(15,"div",9),o(16,"img",10),t(17,"div",11)(18,"h5",12),n(19,"sport Shoe 1"),e(),t(20,"p",13),n(21,"Stylish and comfortable casual shoe."),e(),t(22,"a",14),n(23,"Buy Now"),e()()()(),t(24,"div",8)(25,"div",9),o(26,"img",15),t(27,"div",11)(28,"h5",12),n(29,"sport Shoe 2"),e(),t(30,"p",13),n(31,"Perfect for any occasion."),e(),t(32,"a",14),n(33,"Buy Now"),e()()()(),t(34,"div",8)(35,"div",9),o(36,"img",16),t(37,"div",11)(38,"h5",12),n(39,"sport Shoe 3"),e(),t(40,"p",13),n(41,"Comfort and style in one."),e(),t(42,"a",14),n(43,"Buy Now"),e()()()(),t(44,"div",8)(45,"div",9),o(46,"img",17),t(47,"div",11)(48,"h5",12),n(49,"sport Shoe 4"),e(),t(50,"p",13),n(51,"Simple yet trendy design."),e(),t(52,"a",14),n(53,"Buy Now"),e()()()(),t(54,"div",8)(55,"div",9),o(56,"img",18),t(57,"div",11)(58,"h5",12),n(59,"sport Shoe 5"),e(),t(60,"p",13),n(61,"Perfect for daily wear."),e(),t(62,"a",14),n(63,"Buy Now"),e()()()(),t(64,"div",8)(65,"div",9),o(66,"img",19),t(67,"div",11)(68,"h5",12),n(69,"sport shoes Shoe 6"),e(),t(70,"p",13),n(71,"Step up your fashion game."),e(),t(72,"a",14),n(73,"Buy Now"),e()()()()()()()())},styles:[`

        body[_ngcontent-%COMP%] {
            font-family: 'Montserrat', sans-serif;
        }

        .product-title[_ngcontent-%COMP%] {
            text-align: center;
            margin: 40px 0;
            font-size: 2.5rem;
            font-weight: 600;
        }

        

        .product-card[_ngcontent-%COMP%] {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
        }

        .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #ddd;
        }

        .product-card[_ngcontent-%COMP%]:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .product-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {
            text-align: center;
            padding: 20px;
        }

        .product-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
            margin-top: 10px;
            background-color: #343a40;
            color: white;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {
            background-color: #495057;
        }`]})};var S=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-slippers"]],standalone:!0,features:[s],decls:74,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",m`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css`,"rel","stylesheet"],["href",m`https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap`,"rel","stylesheet"],[1,"container"],[1,"product-title"],[1,"row","g-4"],[1,"col-md-4"],[1,"card","product-card"],["src","https://picsum.photos/300?random=1","alt","Product 1",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn"],["src","https://picsum.photos/300?random=2","alt","Product 2",1,"card-img-top"],["src","https://picsum.photos/300?random=3","alt","Product 3",1,"card-img-top"],["src","https://picsum.photos/300?random=4","alt","Product 4",1,"card-img-top"],["src","https://picsum.photos/300?random=5","alt","Product 5",1,"card-img-top"],["src","https://picsum.photos/300?random=6","alt","Product 6",1,"card-img-top"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"Casual Shoes - Product Section"),e(),o(6,"link",3)(7,"link",4),e(),t(8,"body")(9,"div",5)(10,"h1",6),n(11,"slippers"),e()(),t(12,"div",5)(13,"div",7)(14,"div",8)(15,"div",9),o(16,"img",10),t(17,"div",11)(18,"h5",12),n(19," slipper 1"),e(),t(20,"p",13),n(21,"Stylish and comfortable casual shoe."),e(),t(22,"a",14),n(23,"Buy Now"),e()()()(),t(24,"div",8)(25,"div",9),o(26,"img",15),t(27,"div",11)(28,"h5",12),n(29,"slipper 2"),e(),t(30,"p",13),n(31,"Perfect for any occasion."),e(),t(32,"a",14),n(33,"Buy Now"),e()()()(),t(34,"div",8)(35,"div",9),o(36,"img",16),t(37,"div",11)(38,"h5",12),n(39,"slipper 3"),e(),t(40,"p",13),n(41,"Comfort and style in one."),e(),t(42,"a",14),n(43,"Buy Now"),e()()()(),t(44,"div",8)(45,"div",9),o(46,"img",17),t(47,"div",11)(48,"h5",12),n(49,"slipper 4"),e(),t(50,"p",13),n(51,"Simple yet trendy design."),e(),t(52,"a",14),n(53,"Buy Now"),e()()()(),t(54,"div",8)(55,"div",9),o(56,"img",18),t(57,"div",11)(58,"h5",12),n(59,"slipper 5"),e(),t(60,"p",13),n(61,"Perfect for daily wear."),e(),t(62,"a",14),n(63,"Buy Now"),e()()()(),t(64,"div",8)(65,"div",9),o(66,"img",19),t(67,"div",11)(68,"h5",12),n(69,"slipper 6"),e(),t(70,"p",13),n(71,"Step up your fashion game."),e(),t(72,"a",14),n(73,"Buy Now"),e()()()()()()()())},styles:[`

        body[_ngcontent-%COMP%] {
            font-family: 'Montserrat', sans-serif;
        }

        .product-title[_ngcontent-%COMP%] {
            text-align: center;
            margin: 40px 0;
            font-size: 2.5rem;
            font-weight: 600;
        }

        

        .product-card[_ngcontent-%COMP%] {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
        }

        .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #ddd;
        }

        .product-card[_ngcontent-%COMP%]:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .product-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {
            text-align: center;
            padding: 20px;
        }

        .product-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
            margin-top: 10px;
            background-color: #343a40;
            color: white;
        }

        .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {
            background-color: #495057;
        }`]})};var v=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-categories"]],standalone:!0,features:[s],decls:46,vars:0,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"]],template:function(i,d){i&1&&(t(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),t(4,"title"),n(5,"Our Shoe Categories"),e()(),t(6,"body")(7,"h1"),n(8,"Our Shoe Categories"),e(),t(9,"div")(10,"p")(11,"strong"),n(12,"Shoe Types:"),e()(),t(13,"ul")(14,"li"),n(15,"Casual Shoes"),e(),t(16,"li"),n(17,"Running Shoes"),e(),t(18,"li"),n(19,"Sport Shoes"),e(),t(20,"li"),n(21,"Formal Shoes"),e(),t(22,"li"),n(23,"Sneakers"),e(),t(24,"li"),n(25,"Boots"),e(),t(26,"li"),n(27,"Loafers"),e(),t(28,"li"),n(29,"Sandals"),e()()(),t(30,"h2"),n(31,"Men's Shoes"),e(),t(32,"p"),n(33," A pair of adidas shoes, for casual or sporting activities, is a must-have for men of all ages. A great way to finish off your outfit with style and look the part, no matter the occasion, is to choose your shoes wisely, and adidas is here to help with our range of shoes for men. Find the right sporting ally for you, with a wide range of men\u2019s shoes to choose from. No matter where your passions lie, you can find the right kicks to keep you performing at the ultimate level. The adidas range of men\u2019s shoes throws a nod to retro styles that created the brand\u2019s legacy and also looks at futuristic designs known for their tech backing and athlete-identical edge. "),e(),t(34,"h3"),n(35,"Sporting Essentials to Help You Train Like a Pro"),e(),t(36,"p"),n(37," Choose your men\u2019s shoes with care, taking into consideration the return you want to see from your activity, whether for a day on the golf course, a training session for the next football season, a running plan for a marathon, or hiking in the mountains. The adidas range of shoes for men is designed using state-of-the-art technology and innovative features that will suit your exercise style. "),e(),t(38,"p"),n(39," Football boots exist to play on soft ground with agility stud configuration, or hard ground with lightweight, firm ground outsoles. Golfers can choose shoes with a Primeknit upper that molds itself to your foot or a pair with a leather upper that keeps your feet warm and dry on cold, wet golf days. Challenge your personal best with a pair of adidas running shoes for men made with advanced Boost technology in the midsole that gives you extra lift with every step. Hikers, pick up a pair of lightweight GORE-TEX\xAE shoes to keep your feet dry on rainy days. "),e(),t(40,"h4"),n(41,"Not Only for Training"),e(),t(42,"p"),n(43," Relax after exercising by hanging out with your mates about town in an iconic pair of adidas casual sneakers with soft leather uppers and the iconic 3-Stripes boasting your loyalty to the brand. Alternatively, you can make a statement with a pair of retro trainers with a design based on the track shoes of the 1970s. "),e(),t(44,"p"),n(45," Putting together an outfit that has street cred, a fresh factor and a high-end touch is easy with adidas sneakers. Mix your shoes with chinos, jeans or long shorts for a lifestyle lived with the right attitude. "),e()()())},styles:[`body[_ngcontent-%COMP%] {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }

        h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {
            color: #333;
        }

        p[_ngcontent-%COMP%] {
            margin-bottom: 20px;
        }`]})};var C=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-footer"]],standalone:!0,features:[s],decls:37,vars:0,consts:[[1,"footer","bg-dark","text-light","py-4"],[1,"container"],[1,"row"],[1,"col-md-4"],[1,"list-unstyled"],["href","#",1,"text-light"],["href","#",1,"text-light","me-3"],[1,"fab","fa-facebook"],[1,"fab","fa-twitter"],[1,"fab","fa-instagram"],[1,"text-center","mt-3"]],template:function(i,d){i&1&&(t(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5"),n(5,"About Us"),e(),t(6,"p"),n(7,"We are AestheticShoes, providing the best casual, sport, and formal shoes for all your needs. Step into style with us!"),e()(),t(8,"div",3)(9,"h5"),n(10,"Quick Links"),e(),t(11,"ul",4)(12,"li")(13,"a",5),n(14,"Home"),e()(),t(15,"li")(16,"a",5),n(17,"Shop"),e()(),t(18,"li")(19,"a",5),n(20,"Contact Us"),e()(),t(21,"li")(22,"a",5),n(23,"About Us"),e()()()(),t(24,"div",3)(25,"h5"),n(26,"Follow Us"),e(),t(27,"div")(28,"a",6),o(29,"i",7),e(),t(30,"a",6),o(31,"i",8),e(),t(32,"a",6),o(33,"i",9),e()()()(),t(34,"div",10)(35,"p"),n(36,"\xA9 2024 AestheticShoes. All rights reserved."),e()()()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#333}.footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#1da1f2}"]})};var y=class r{title="aestheticshoes";static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-root"]],standalone:!0,features:[s],decls:9,vars:0,template:function(i,d){i&1&&o(0,"router-outlet")(1,"app-navbar")(2,"app-hero")(3,"app-product")(4,"app-productformal")(5,"app-sportshoes")(6,"app-slippers")(7,"app-categories")(8,"app-footer")},dependencies:[O,h,f,u,g,x,S,v,C]})};var k=[];var N={providers:[b({eventCoalescing:!0}),_(k),E()]};var D={providers:[M()]},F=w(N,D);var A=()=>P(y,F),ht=A;export{ht as a};
