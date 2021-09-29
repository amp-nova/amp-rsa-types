"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = exports.Category = exports.Variant = exports.Attribute = exports.Product = exports.CommerceObject = exports.Identifiable = exports.CategoryResults = exports.ProductResults = exports.ResultsMeta = exports.ProductImage = exports.Prices = void 0;
var Prices = /** @class */ (function () {
    function Prices() {
    }
    return Prices;
}());
exports.Prices = Prices;
var ProductImage = /** @class */ (function () {
    function ProductImage() {
    }
    return ProductImage;
}());
exports.ProductImage = ProductImage;
var ResultsMeta = /** @class */ (function () {
    function ResultsMeta() {
    }
    return ResultsMeta;
}());
exports.ResultsMeta = ResultsMeta;
var ProductResults = /** @class */ (function () {
    function ProductResults() {
    }
    return ProductResults;
}());
exports.ProductResults = ProductResults;
var CategoryResults = /** @class */ (function () {
    function CategoryResults() {
    }
    return CategoryResults;
}());
exports.CategoryResults = CategoryResults;
var Identifiable = /** @class */ (function () {
    function Identifiable() {
    }
    return Identifiable;
}());
exports.Identifiable = Identifiable;
var CommerceObject = /** @class */ (function (_super) {
    __extends(CommerceObject, _super);
    function CommerceObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommerceObject;
}(Identifiable));
exports.CommerceObject = CommerceObject;
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Product;
}(CommerceObject));
exports.Product = Product;
var Attribute = /** @class */ (function () {
    function Attribute() {
    }
    return Attribute;
}());
exports.Attribute = Attribute;
var Variant = /** @class */ (function (_super) {
    __extends(Variant, _super);
    function Variant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Variant;
}(Identifiable));
exports.Variant = Variant;
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Category;
}(CommerceObject));
exports.Category = Category;
var SearchResult = /** @class */ (function () {
    function SearchResult() {
    }
    return SearchResult;
}());
exports.SearchResult = SearchResult;
