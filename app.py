from flask import Flask, render_template, send_from_directory, request, jsonify

app = Flask(__name__)

# Temporary storage for push subscriptions.
# NOTE: This is only for testing.
# It will reset if the Render service restarts or redeploys.
push_subscriptions = []


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/service-worker.js")
def service_worker():
    return send_from_directory(
        app.root_path,
        "service-worker.js",
        mimetype="application/javascript"
    )


# Receive and save a browser push subscription
@app.route("/api/subscribe", methods=["POST"])
def subscribe():
    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "success": False,
            "message": "No subscription data received."
        }), 400

    # Avoid saving the exact same subscription twice
    if data not in push_subscriptions:
        push_subscriptions.append(data)

    return jsonify({
        "success": True,
        "message": "Push subscription saved successfully."
    })


# Simple status endpoint for testing
@app.route("/api/subscription-status", methods=["GET"])
def subscription_status():
    return jsonify({
        "success": True,
        "subscription_count": len(push_subscriptions)
    })


if __name__ == "__main__":
    app.run(debug=True)
