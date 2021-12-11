const yup = require('yup');

exports.schema = yup.object().shape({
        fullname: yup.string()
            .required("نام و نام خانوادگی الزامی میباشد")
            .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
            .max(255),
        email: yup.string()
            .email("ایمیل معتبر نمی باشد")
            .required("ایمیل الزامی میباشد"),
        password: yup.string()
            .min(4, "رمز عبور نباید کمتر از 4 کاراکتر باشد")
            .max(255),
    })
    // ==============================================================
exports.shping = yup.object().shape({
    title: yup.string()
        .required("عنوان پست الزامی میباشد")
        .min(4)
        .max(300),
    body: yup.string()
        .required("برای محصول خو توضیحاتی را وارد کنید")
        .min(4)
        .max(399),
    status: yup.string(),

})