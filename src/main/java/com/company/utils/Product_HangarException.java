package com.company.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class Product_HangarException {

    @ResponseStatus(HttpStatus.CONFLICT)
    public static class Product_HangarNotExistException extends RuntimeException {

        public Product_HangarNotExistException() {
            super("Not exist");
        }
    }
}
