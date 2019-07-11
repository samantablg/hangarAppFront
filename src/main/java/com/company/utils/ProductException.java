/*
package com.company.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class ProductException {

    //TODO modificar para utilizarlo en el servicio de producto

    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public class ProductNotFoundException extends RuntimeException {

        private static final long serialVersionUID = 7295910574475009536L;

        public ProductNotFoundException() {
            super("There is not product");
        }

        public ProductNotFoundException(Long id) {
            super(String.format("The product %d doesn't exist", id));
        }
    }

    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public class ProductEmptyException extends RuntimeException {

        private static final long serialVersionUID = -2343578248323481893L;

        public ProductEmptyException() {
            super("Product without info");
        }
    }

    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public class ProductExistException extends RuntimeException {

        private static final long serialVersionUID = -8795820457855546654L;

        public ProductExistException() {
            super("Product already exist");
        }

        public ProductExistException(String name) {
            super(String.format("The product %s exists, you can insert more quantity", name));
        }
    }

    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public class HangarExistException extends RuntimeException {

        private static final long serialVersionUID = -8795820457855546654L;

        public HangarExistException() {
            super("Hangar not exist");
        }
    }
}
*/
