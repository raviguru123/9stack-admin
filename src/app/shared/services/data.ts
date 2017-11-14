export const data=[
  {
    "data": {
      "columns": {
        "amount": {
          "name": "Amount",
          "type": "search"
        },
        "credit_type": {
          "name": "Credit Type",
          "type": "dropdown",
          "values": [
            "play_money",
            "cash_money",
            "blind_money",
            "cashback_money",
            "tourney_money",
            "bonus_money",
            "withdrawal"
          ]
        },
        "end_date": {
          "name": "End Date",
          "type": "Date"
        },
        "from_wallet": {
          "name": "From Wallet",
          "type": "search"
        },
        "group_transaction_id": {
          "name": "GID",
          "type": "search"
        },
        "notes": {
          "name": "Notes",
          "type": null
        },
        "payment_id": {
          "name": "Payment ID",
          "type": "search"
        },
        "poker_balance": {
          "name": "Poker Balance",
          "type": null
        },
        "promo_code": {
          "name": "Promo Code",
          "type": "search"
        },
        "promo_id": {
          "name": "Promo ID",
          "type": "search"
        },
        "promo_value": {
          "name": "Promo Value",
          "type": "search"
        },
        "purpose": {
          "name": "Purpose",
          "type": "Dropdown",
          "values": [
            "deposit",
            "deposit_admin",
            "withdrawal",
            "refund",
            "down",
            "reversal_admin",
            "down_initiated",
            "down_success",
            "down_failed",
            "withdrawal_initiated",
            "withdrawal_success",
            "withdrawal_failed",
            "rake",
            "rake_back",
            "tds",
            "wallet_transfer",
            "user_transfer",
            "join_game",
            "exit_game",
            "promo",
            "referral",
            "forced_deposit",
            "forced_withdrawal",
            "commission",
            "payment",
            "others"
          ]
        },
        "start_date": {
          "name": "Start Date",
          "type": "Date"
        },
        "status": {
          "name": "Status",
          "type": "Dropdown",
          "values": [
            "initiated",
            "success",
            "pending",
            "declined",
            "failed",
            "rollback",
            "rollback_failed",
            "in_review"
          ]
        },
        "tds": {
          "name": "TDS",
          "type": "search"
        },
        "to_wallet": {
          "name": "To Wallet",
          "type": "search"
        },
        "transaction_id": {
          "name": "ID",
          "type": "search"
        },
        "transaction_type": {
          "name": "Transaction Type",
          "type": "dropdown",
          "values": [
            "credit",
            "debiy"
          ]
        },
        "user": {
          "name": "User",
          "type": "search"
        },
        "user_balance": {
          "name": "User Balance",
          "type": null
        },
        "user_bank": {
          "name": "User Bank",
          "type": null
        }
      },
      "transaction_traces": {
        "total_count": 0,
        "transactions": [
          {
            "fields": {
              "amount": 10000,
              "created_by": null,
              "created_on": "2017-11-12T17:42:35.252Z",
              "credit_type": "cash_money",
              "from_wallet": "195",
              "group_transaction_id": "de04b84c-c7d0-11e7-be81-0242ac110007",
              "main_wallet_balance": 0,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 10000,
              "promoId": "59a2b17872716660552eb49b",
              "promocode": "null",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "2",
              "transaction_type": "credit",
              "user": "5a08880a9e7ed200119b87a7",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1573
          },
          {
            "fields": {
              "amount": 10000,
              "created_by": null,
              "created_on": "2017-11-12T17:42:35.245Z",
              "credit_type": "bonus_money",
              "from_wallet": "2",
              "group_transaction_id": "de04b84c-c7d0-11e7-be81-0242ac110007",
              "main_wallet_balance": 2632085,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 100,
              "promoId": "59a2b17872716660552eb49b",
              "promocode": "null",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "195",
              "transaction_type": "debit",
              "user": "59bbcb1b65257e0013c68af7",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1572
          },
          {
            "fields": {
              "amount": 10000,
              "created_by": null,
              "created_on": "2017-11-12T17:42:35.031Z",
              "credit_type": "cash_money",
              "from_wallet": null,
              "group_transaction_id": "de04b84c-c7d0-11e7-be81-0242ac110007",
              "main_wallet_balance": 0,
              "notes": "Enterra: Deposit to Enterra poker balance",
              "payment_id": "2431000",
              "poker_wallet_balance": 0,
              "promoId": "59a2b17872716660552eb49b",
              "promocode": "null",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": null,
              "transaction_type": "credit",
              "user": "5a08880a9e7ed200119b87a7",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1571
          },
          {
            "fields": {
              "amount": 10000,
              "created_by": null,
              "created_on": "2017-11-11T09:48:15.035Z",
              "credit_type": "cash_money",
              "from_wallet": "193",
              "group_transaction_id": "70019c86-c6c5-11e7-9aa9-0242ac110007",
              "main_wallet_balance": 0,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 30000,
              "promoId": "59a2b17872716660552eb49b",
              "promocode": "null",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "2",
              "transaction_type": "credit",
              "user": "5a06c75e9e7ed200119b87a6",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1570
          },
          {
            "fields": {
              "amount": 10000,
              "created_by": null,
              "created_on": "2017-11-11T09:48:15.027Z",
              "credit_type": "bonus_money",
              "from_wallet": "2",
              "group_transaction_id": "70019c86-c6c5-11e7-9aa9-0242ac110007",
              "main_wallet_balance": 2642085,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 100,
              "promoId": "59a2b17872716660552eb49b",
              "promocode": "null",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "193",
              "transaction_type": "debit",
              "user": "59bbcb1b65257e0013c68af7",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1569
          },
          {
            "fields": {
              "amount": 20000,
              "created_by": null,
              "created_on": "2017-11-11T09:48:14.984Z",
              "credit_type": "cash_money",
              "from_wallet": "193",
              "group_transaction_id": "6fe87922-c6c5-11e7-991a-0242ac110007",
              "main_wallet_balance": 0,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 20000,
              "promoId": "59a5b83f72716660552eb4bc",
              "promocode": "TESTAFFBC",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "2",
              "transaction_type": "credit",
              "user": "5a06c75e9e7ed200119b87a6",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1568
          },
          {
            "fields": {
              "amount": 20000,
              "created_by": null,
              "created_on": "2017-11-11T09:48:14.976Z",
              "credit_type": "bonus_money",
              "from_wallet": "2",
              "group_transaction_id": "6fe87922-c6c5-11e7-991a-0242ac110007",
              "main_wallet_balance": 2652085,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 100,
              "promoId": "59a5b83f72716660552eb4bc",
              "promocode": "TESTAFFBC",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "193",
              "transaction_type": "debit",
              "user": "59bbcb1b65257e0013c68af7",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1567
          },
          {
            "fields": {
              "amount": 10000,
              "created_by": null,
              "created_on": "2017-11-11T09:48:14.823Z",
              "credit_type": "cash_money",
              "from_wallet": null,
              "group_transaction_id": "70019c86-c6c5-11e7-9aa9-0242ac110007",
              "main_wallet_balance": 0,
              "notes": "Enterra: Deposit to Enterra poker balance",
              "payment_id": "2298040",
              "poker_wallet_balance": 0,
              "promoId": "59a2b17872716660552eb49b",
              "promocode": "null",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": null,
              "transaction_type": "credit",
              "user": "5a06c75e9e7ed200119b87a6",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1566
          },
          {
            "fields": {
              "amount": 20000,
              "created_by": null,
              "created_on": "2017-11-11T09:48:14.674Z",
              "credit_type": "cash_money",
              "from_wallet": null,
              "group_transaction_id": "6fe87922-c6c5-11e7-991a-0242ac110007",
              "main_wallet_balance": 0,
              "notes": "Enterra: Deposit to Enterra poker balance",
              "payment_id": "2298038",
              "poker_wallet_balance": 0,
              "promoId": "59a5b83f72716660552eb4bc",
              "promocode": "TESTAFFBC",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": null,
              "transaction_type": "credit",
              "user": "5a06c75e9e7ed200119b87a6",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1565
          },
          {
            "fields": {
              "amount": 20000,
              "created_by": null,
              "created_on": "2017-11-11T09:46:51.753Z",
              "credit_type": "cash_money",
              "from_wallet": "191",
              "group_transaction_id": "3e52e474-c6c5-11e7-8645-0242ac110007",
              "main_wallet_balance": 0,
              "notes": null,
              "payment_id": null,
              "poker_wallet_balance": 20000,
              "promoId": "59a5b83f72716660552eb4bc",
              "promocode": "TESTAFFBC",
              "purpose": "promo",
              "status": "success",
              "tds": 0,
              "to_wallet": "2",
              "transaction_type": "credit",
              "user": "5a06c7099e7ed200119b87a5",
              "user_bank": null
            },
            "model": "transaction.transaction",
            "pk": 1564
          }
        ]
      }
    },
    "status": {
      "code": 200,
      "message": "Transactions successfully fetched",
      "success": true
    }
  }
  ];