package com.company.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class PriceException {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    public static class PriceNotFoundException extends RuntimeException {

        public PriceNotFoundException() {
            super("There is not price");
        }

        public PriceNotFoundException(Long id) {
            super(String.format("The price %d doesn't exist", id));
        }
    }
}
