resource "aws_cloudfront_distribution" "site" {
  aliases                         = ["mypassporthub.com", "www.mypassporthub.com"]
  comment                         = "Prod mypassporthub.com"
  continuous_deployment_policy_id = null
  default_root_object             = "index.html"
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = false
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags                            = {}
  tags_all                        = {}
  wait_for_deployment             = true
  web_acl_id                      = "arn:aws:wafv2:us-east-1:941024811388:global/webacl/PassportsPublic/3de8c2da-c87c-4265-8b97-7d42a93e9e47"
  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = "acba4595-bd28-49b8-b9fe-13317c0390fa"
    realtime_log_config_arn    = null
    response_headers_policy_id = null
    smooth_streaming           = false
    target_origin_id           = "www.mypassporthub.com.s3.us-east-1.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "www.mypassporthub.com.s3.us-east-1.amazonaws.com"
    origin_access_control_id = "E2NULQPHFW1QPW"
    origin_id                = "www.mypassporthub.com.s3.us-east-1.amazonaws.com"
    origin_path              = null
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:941024811388:certificate/b2db3d54-0c42-4d13-8572-40b34d73a0a1"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}

resource "aws_cloudfront_distribution" "api" {
  aliases                         = ["api.app.mypassporthub.com"]
  comment                         = "Passports static site"
  continuous_deployment_policy_id = null
  default_root_object             = null
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = false
  price_class                     = "PriceClass_100"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Env     = "Prod"
    Jira    = "PAS"
    Name    = "api.mypassporthub.com"
    Project = ""
    Service = "api"
  }
  tags_all = {
    Env     = "Prod"
    Jira    = "PAS"
    Name    = "api.mypassporthub.com"
    Project = ""
    Service = "api"
  }
  wait_for_deployment = true
  web_acl_id          = "arn:aws:wafv2:us-east-1:941024811388:global/webacl/PassportsPublic/3de8c2da-c87c-4265-8b97-7d42a93e9e47"
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }
  default_cache_behavior {
    allowed_methods            = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cache_policy_id            = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = "216adef6-5c7f-47e4-b989-5492eafa07d3"
    realtime_log_config_arn    = "arn:aws:cloudfront::941024811388:realtime-log-config/Passports-RealtimeLogs"
    response_headers_policy_id = null
    smooth_streaming           = false
    target_origin_id           = "alb-api-prod-cf-1259809253.eu-west-1.elb.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "https-only"
    function_association {
      event_type   = "viewer-request"
      function_arn = "arn:aws:cloudfront::941024811388:function/true-ip-client-3"
    }
    grpc_config {
      enabled = false
    }
  }
  logging_config {
    bucket          = "passport-cloudfrontlogs.s3.amazonaws.com"
    include_cookies = false
    prefix          = "cloudfront/api.mypassporthub.com"
  }
  ordered_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = null
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 86400
    field_level_encryption_id  = null
    max_ttl                    = 31536000
    min_ttl                    = 300
    origin_request_policy_id   = null
    path_pattern               = "/*.html"
    realtime_log_config_arn    = null
    response_headers_policy_id = null
    smooth_streaming           = false
    target_origin_id           = "alb-api-prod-cf-1259809253.eu-west-1.elb.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "allow-all"
    forwarded_values {
      headers                 = []
      query_string            = false
      query_string_cache_keys = []
      cookies {
        forward           = "none"
        whitelisted_names = []
      }
    }
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "alb-api-prod-cf-1259809253.eu-west-1.elb.amazonaws.com"
    origin_access_control_id = null
    origin_id                = "alb-api-prod-cf-1259809253.eu-west-1.elb.amazonaws.com"
    origin_path              = null
    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols     = ["SSLv3", "TLSv1"]
    }
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:941024811388:certificate/e161aa7f-6b22-42a2-91e3-460dbd44f4ec"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}

resource "aws_cloudfront_distribution" "app" {
  aliases                         = ["app.mypassporthub.com"]
  comment                         = "Passports static site"
  continuous_deployment_policy_id = null
  default_root_object             = null
  enabled                         = true
  http_version                    = "http2and3"
  is_ipv6_enabled                 = true
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Env     = "Prod"
    Jira    = "PAS"
    Name    = "app.mypassporthub.com"
    Project = "Passports"
    Service = "frontend"
  }
  tags_all = {
    Env     = "Prod"
    Jira    = "PAS"
    Name    = "app.mypassporthub.com"
    Project = "Passports"
    Service = "frontend"
  }
  wait_for_deployment = true
  web_acl_id          = "arn:aws:wafv2:us-east-1:941024811388:global/webacl/PassportsPublic/3de8c2da-c87c-4265-8b97-7d42a93e9e47"
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }
  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = null
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 86400
    field_level_encryption_id  = null
    max_ttl                    = 31536000
    min_ttl                    = 0
    origin_request_policy_id   = null
    realtime_log_config_arn    = "arn:aws:cloudfront::941024811388:realtime-log-config/Passports-RealtimeLogs"
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    smooth_streaming           = false
    target_origin_id           = "passports-prod-temas"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    forwarded_values {
      headers                 = ["CloudFront-Forwarded-Proto", "Host", "Origin"]
      query_string            = true
      query_string_cache_keys = ["gclid", "id", "msclkid", "utm_campaign", "utm_content", "utm_medium", "utm_source"]
      cookies {
        forward           = "none"
        whitelisted_names = []
      }
    }
    grpc_config {
      enabled = false
    }
    lambda_function_association {
      event_type   = "origin-request"
      include_body = false
      lambda_arn   = "arn:aws:lambda:us-east-1:941024811388:function:cf-landings-redirect:24"
    }
    lambda_function_association {
      event_type   = "viewer-request"
      include_body = false
      lambda_arn   = "arn:aws:lambda:us-east-1:941024811388:function:cf-subfolder-redirect:3"
    }
  }
  logging_config {
    bucket          = "passport-cloudfrontlogs.s3.amazonaws.com"
    include_cookies = false
    prefix          = "cloudfront/app.mypassporthub.com"
  }
  ordered_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    path_pattern               = "/assets"
    realtime_log_config_arn    = "arn:aws:cloudfront::941024811388:realtime-log-config/Passports-RealtimeLogs"
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    smooth_streaming           = false
    target_origin_id           = "passports-prod-assets"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  ordered_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    path_pattern               = "/assets/*"
    realtime_log_config_arn    = "arn:aws:cloudfront::941024811388:realtime-log-config/Passports-RealtimeLogs"
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    smooth_streaming           = false
    target_origin_id           = "passports-prod-assets"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "passports-prod-bucket.s3.us-east-1.amazonaws.com"
    origin_access_control_id = null
    origin_id                = "passports-prod-assets"
    origin_path              = null
    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/E2IKABEFR6AGOC"
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "passports-prod-bucket.s3.us-east-1.amazonaws.com"
    origin_access_control_id = null
    origin_id                = "passports-prod-temas"
    origin_path              = "/themes/american-MPH"
    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/E2IKABEFR6AGOC"
    }
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:941024811388:certificate/b2db3d54-0c42-4d13-8572-40b34d73a0a1"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}


resource "aws_cloudfront_distribution" "stage" {
  aliases                         = ["stage-app.mypassporthub.com"]
  comment                         = "Passports static site"
  continuous_deployment_policy_id = null
  default_root_object             = null
  enabled                         = true
  http_version                    = "http2and3"
  is_ipv6_enabled                 = false
  price_class                     = "PriceClass_100"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Env     = "stage"
    Name    = "stage-app.mypassporthub.com"
    Project = ""
    Service = "frontend-stage"
  }
  tags_all = {
    Env     = "stage"
    Name    = "stage-app.mypassporthub.com"
    Project = ""
    Service = "frontend-stage"
  }
  wait_for_deployment = true
  web_acl_id          = "arn:aws:wafv2:us-east-1:941024811388:global/webacl/PassportsPublic/3de8c2da-c87c-4265-8b97-7d42a93e9e47"
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }
  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = null
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    realtime_log_config_arn    = null
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    smooth_streaming           = false
    target_origin_id           = "passports-stage-temas"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    forwarded_values {
      headers                 = ["CloudFront-Forwarded-Proto", "Host", "Origin"]
      query_string            = true
      query_string_cache_keys = ["gclid", "id", "msclkid", "utm_campaign", "utm_content", "utm_medium", "utm_source"]
      cookies {
        forward           = "none"
        whitelisted_names = []
      }
    }
    grpc_config {
      enabled = false
    }
    lambda_function_association {
      event_type   = "origin-request"
      include_body = false
      lambda_arn   = "arn:aws:lambda:us-east-1:941024811388:function:cf-landings-redirect:20"
    }
    lambda_function_association {
      event_type   = "viewer-request"
      include_body = false
      lambda_arn   = "arn:aws:lambda:us-east-1:941024811388:function:cf-subfolder-redirect:2"
    }
  }
  logging_config {
    bucket          = "passport-cloudfrontlogs.s3.amazonaws.com"
    include_cookies = false
    prefix          = "cloudfront/stage-app.mypassporthub.com"
  }
  ordered_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    path_pattern               = "/assets"
    realtime_log_config_arn    = null
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    smooth_streaming           = false
    target_origin_id           = "passports-stage-assets"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  ordered_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    path_pattern               = "/assets/*"
    realtime_log_config_arn    = null
    response_headers_policy_id = "67f7725c-6f97-4210-82d7-5512b31e9d03"
    smooth_streaming           = false
    target_origin_id           = "passports-stage-assets"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "passports-stage-bucket.s3.us-east-1.amazonaws.com"
    origin_access_control_id = null
    origin_id                = "passports-stage-assets"
    origin_path              = "/stage"
    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/E2IKABEFR6AGOC"
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "passports-stage-bucket.s3.us-east-1.amazonaws.com"
    origin_access_control_id = null
    origin_id                = "passports-stage-temas"
    origin_path              = "/stage/themes/american-MPH"
    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/E2IKABEFR6AGOC"
    }
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:941024811388:certificate/b2db3d54-0c42-4d13-8572-40b34d73a0a1"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}