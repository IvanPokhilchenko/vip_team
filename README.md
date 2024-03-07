VIP_Team
Ivan Pokhilchenko
Victoria Cernenchi
Violetta Polishchuk


_________________________________________________________________________________________
  Ivan Pokhilchenko
_________________________________________________________________________________________
Главная страница:
На главной странице отображается список из 4 категорий, форма для получения скидки в 5% с валидацией вводимых данных, а также 4 случайных товара со скидкой.

CategoriesList:
Отображает список категорий.
Загружает данные категорий с сервера при монтировании компонента.
При клике на категорию осуществляет переход на страницу этой категории.

DiscountForm:
Предоставляет форму для получения скидки на первый заказ.
Осуществляет валидацию введенных данных: проверяет наличие имени, номера телефона и адреса электронной почты, а также их длину.
При отправке формы вызывается функция onSubmit, которая отправляет данные на сервер для получения скидки.
Использует хук useForm из библиотеки react-hook-form для управления формой.

RandomProducts:
Отображает 4 случайных товара со скидкой.
Загружает случайные товары с сервера при монтировании компонента.
При клике на товар осуществляет переход на страницу с деталями этого товара.
_________________________________________________________________________________________________
Товары по категориям:
На странице "Товары по категориям" отображается список товаров в выбранной категории с возможностью сортировки и фильтрации товаров.

ProductsByCategory:
Отображает список товаров в выбранной категории.
Получает и отображает данные о товарах с сервера.
Позволяет пользователю сортировать товары по различным параметрам: по умолчанию, по новизне, по цене (высокая-низкая, низкая-высокая).
Предоставляет возможность фильтрации товаров по наличию скидки и ценовому диапазону.
Использует компонент ProductFilter для настройки сортировки и фильтрации.

ProductFilter:
Отображает интерфейс для настройки сортировки и фильтрации товаров.
Пользователь может выбирать порядок сортировки (по умолчанию, по новизне, по цене).
Предоставляет возможность фильтровать товары по наличию скидки и заданному ценовому диапазону.
_________________________________________________________________________________________________
Товары со скидкой
На странице "Товары со скидкой" отображается список товаров, которые имеют скидку, с возможностью сортировки и фильтрации.

PageDiscountedProduct:
Отображает список товаров со скидкой.
Получает данные о товарах с сервера и отображает их.
Позволяет пользователю сортировать товары по различным параметрам: по умолчанию, по новизне, по цене (высокая-низкая, низкая-высокая).
Предоставляет возможность фильтрации товаров по ценовому диапазону.
Использует компонент DiscountedFilter для настройки сортировки и фильтрации.

DiscountedProduct:
Отображает отдельный товар со скидкой.
Показывает изображение, название и цену товара.
Выводит процент скидки, если скидка присутствует.

DiscountedFilter:
Предоставляет интерфейс для настройки сортировки и фильтрации товаров со скидкой.
Позволяет пользователю выбирать порядок сортировки (по умолчанию, по новизне, по цене) и задавать ценовой диапазон.
________________________________________________________________________________________________
Корзина
На странице "Корзина" пользователю предоставляется возможность просмотра списка выбранных товаров, их количества, общей стоимости, а также осуществления заказа с валидацией вводимых данных.

Basket:
Отображает список выбранных товаров с изображением, названием, количеством, ценой и общей стоимостью заказа.
Позволяет изменять количество товаров в корзине или удалять товары из нее.
Реализует форму для ввода информации о заказчике с валидацией данных.
Предоставляет возможность отправки заказа на сервер.
Использует компонент Modal для отображения сообщения о успешном размещении заказа.

Modal:
Отображает модальное окно с сообщением о успешном размещении заказа.
Предоставляет кнопку для закрытия модального окна.
__________________________________________________________________________________________
  Victoria Cernenchi
__________________________________________________________________________________________
Within this project, I performed several tasks. Each task taught me to make the connection between them but also to access the other parts of the project that were executed by my colleagues.
Next, I want to give you the information about each executed part.

The header in an online store is responsible for providing navigation, providing basic information about the store and providing the user interface with the following functions:

1. Navigation: The header contains links to the main sections of the store, such as the main page, product catalog, promotions, shopping cart. It provides users with easy access to various sections of the site, making navigation easier.
2. Logo: The store’s logo is placed in the header of the site, which serves to identify the brand and provides a visual connection with the company.
3. Account Login and Cart: Users can log into their account or view the contents of their shopping cart through the website header.
Thus, the header plays an important role in ensuring convenient navigation and providing basic information to users of the online store.


The categories section in the online store displays a list of products divided into specific categories. Each category can contain subcategories and products that belong to this category. This helps customers easily find the product they need and compare different options.
  Categories can also be managed by store administrators and change depending on the range of products.
By showing the category section in the online store, administrators allow customers to more conveniently and quickly find and select products according to their preferences and needs.

In online shopping, a "Not Found" page typically refers to a webpage that may be displayed when a user tries to access a product or category that is unavailable or doesn't exist on the website. It's essentially an error page that lets the user know that the requested item or page cannot be found.

This can happen for a variety of reasons, such as a product being out of stock, a broken link, or a typo in the URL. To improve user experience, online retailers often customize their "Not Found" page to provide helpful suggestions, links to popular categories or products, a search bar, or contact information for customer support.

___________________________________________________________________________________________
  Violetta Polishchuk
___________________________________________________________________________________________
Footer:
Это нижняя часть(подвал) каждой страницы. 
В нем можно найти: контакты, адресс магазина и карту, нак которой такж указан точный адресс.
___________________________________________________________________________________________
Страница Все товары
На странице "Все товары" отображается список всех товаров с возможностью сортировки и фильтрации товаров.

AllProducts:
Отображает список всех товаров.
Получает данные о товарах с сервера и отображает их.
Позволяет пользователю сортировать товары по различным параметрам: по умолчанию, по новизне, по цене (высокая-низкая, низкая-высокая).
Предоставляет возможность фильтрации товаров по ценовому диапазону.
Использует компонент DiscountedFilter для настройки сортировки и фильтрации.
___________________________________________________________________________________________
Страница Товар ###
На странице "Товар ###" отоброжается данные о товаре с возможностью добавить его в корзину либо перейти на другие страницы.

ProductDetailPage:
Отображает один выбранный товар.
ПОльзователь может по конопкам перейти на такие страницы как: Главная страница, Категории, категорию выбранного товара.
Получает данные о товаре с сервера и отображает их.
Позволяет пользователю добавить товар в корзину.








