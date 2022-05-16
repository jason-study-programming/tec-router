# Beautiful Soup Doc

https://www.crummy.com/software/BeautifulSoup/bs4/doc/#navigablestring

If you want to use a `NavigableString` outside of Beautiful Soup, you should call `unicode()` on it to turn it into a normal Python Unicode string. If you don’t, your string will carry around a reference to the entire Beautiful Soup parse tree, even when you’re done using Beautiful Soup. This is a big waste of memory.



https://www.crummy.com/software/BeautifulSoup/bs4/doc/#differences-between-parsers

Differences between parsers can affect your script. If you’re planning on distributing your script to other people, or running it on multiple machines, you should specify a parser in the `BeautifulSoup` constructor. That will reduce the chances that your users parse a document differently from the way you parse it.



https://www.crummy.com/software/BeautifulSoup/bs4/doc/#improving-performance

[Parsing only part of a document](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#parsing-only-part-of-a-document) won’t save you much time parsing the document, but it can save a lot of memory, and it’ll make searching the document much faster.